# -*- coding: utf-8 -*-
"""
Created on Sun Jul 12 19:32:41 2020

@author: mlewe
"""

from selenium import  webdriver
from time import sleep
from bs4 import BeautifulSoup
import csv

PATH = 'C:/Program Files (x86)/chromedriver.exe'

links = []
driver = webdriver.Chrome(PATH)
driver.get("https://www.sainsburys.co.uk/shop/gb/groceries/dairy-eggs-and-chilled/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=428916&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&beginIndex=0&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=428866&top_category=428866&pageSize=120")
sleep(1)


elems = driver.find_elements_by_xpath("//a[@href]")
for elem in elems:
    currentLink = elem.get_attribute("href")
    if('ready-meals-for-one' in currentLink):
        links.append(currentLink)

items = []
for link in links:
    driver.get(link)
    sleep(2)
    title = driver.title
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    price = soup.find_all('div', class_=["pd__cost__total undefined", "pd__cost__total--promo undefined"])
    soup = soup.find_all(["th", "td"])
    i = 0
    if(len(price) > 0):
        if("Rustlers" or "Kirsty's" or "BOL" or "Wasabi" or "Naanster" not in title):
            price = price[0].text
            price = ''.join([c for c in price if c in '1234567890.'])
            price = float(price)
            energyVal = ""
            fatVal = ""
            saturateVal = ""
            carbsVal = ""
            sugarVal = ""
            fibreVal = ""
            proteinVal = ""
            satVal = ""
            while(i < len(soup)):
                if('Energy' in soup[i]):
                    energyVal = soup[i + 1].text
                    energyVal = ''.join([c for c in energyVal if c in '1234567890.'])
                    energyVal = float(energyVal)
                if('Fat' in soup[i]):
                    fatVal = soup[i + 1].text
                    fatVal = ''.join([c for c in fatVal if c in '1234567890.'])
                    fatVal = float(fatVal)
                if('Saturates' in soup[i]):
                    saturateVal = soup[i + 1].text
                    saturateVal = ''.join([c for c in saturateVal if c in '1234567890.'])
                    saturateVal = float(saturateVal)
                if('Carbohydrate' in soup[i]):
                    carbsVal = soup[i + 1].text
                    carbsVal = ''.join([c for c in carbsVal if c in '1234567890.'])
                    carbsVal = float(carbsVal)
                if('Sugars' in soup[i]):
                    sugarVal = soup[i + 1].text
                    sugarVal = ''.join([c for c in sugarVal if c in '1234567890.'])
                    sugarVal = float(sugarVal)
                if('Fibre' in soup[i]):
                    fibreVal = soup[i + 1].text
                    fibreVal = ''.join([c for c in fibreVal if c in '1234567890.'])
                    fibreVal = float(fibreVal)
                if('Protein' in soup[i]):
                    proteinVal = soup[i + 1].text
                    proteinVal = ''.join([c for c in proteinVal if c in '1234567890.'])
                    proteinVal = float(proteinVal)
                if('Salt' in soup[i]):
                    saltVal = soup[i + 1].text
                    saltVal = ''.join([c for c in saltVal if c in '1234567890.'])
                    saltVal = float(saltVal)
                i = i + 1
                
            
                
            newProduct = {"Title":title, "Price":price, "Vegetarian": 0, "Energy": energyVal, "Fat": fatVal, "Saturates": saturateVal,
                                        "Carbohydrate": carbsVal, "Sugars": sugarVal, "Fibre":fibreVal, "Protein":proteinVal,
                                        "Salt": saltVal}
            print(newProduct, "\n --------------------------")
            if newProduct not in items:
                items.append(newProduct)
                    
                
                
csv_columns = ["Title", "Price", "Vegetarian", "Energy", "Fat", "Saturates", "Carbohydrate", "Sugars", "Fibre", "Protein", "Salt"]
csv_file = "sainsburyForOne.csv"
try:
    with open(csv_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns, delimiter=",")
        writer.writeheader()
        for data in items:
            writer.writerow(data)
except IOError:
    print("I/O Error!")