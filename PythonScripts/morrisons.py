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
driver.get("https://groceries.morrisons.com/browse/fresh-176739/ready-meals-176768/meals-for-one-177469?filters=morrisons-108397")
sleep(3)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight /3);")
sleep(2)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight /2);")
sleep(2)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
sleep(2)


elems = driver.find_elements_by_xpath("//a[@href]")

for elem in elems:
    currentLink = elem.get_attribute("href")
    if('products' in currentLink):
        if(currentLink not in links):
            links.append(currentLink)

items = []
for link in links:
    driver.get(link)
    sleep(2)
    title = driver.title
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    priceValue = driver.find_element_by_xpath("//meta[@itemprop='price']")
    price = priceValue.get_attribute("content")
    soup = soup.find_all(["td"])
    sleep(1)
    i = 0
    if(len(price) > 0):
        if("Rustlers" or "Kirsty's" or "BOL" or "Wasabi" or "Naanster" not in title):
            
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
                if('Energy' in soup[i].text):
                    energyVal = soup[i + 1].text
                    
                if('Fat' in soup[i].text):
                    fatVal = soup[i + 1].text
                    fatVal = ''.join([c for c in fatVal if c in '1234567890.'])
                    fatVal = float(fatVal)
                if('of which saturates' in soup[i].text):
                    saturateVal = soup[i + 1].text
                    saturateVal = ''.join([c for c in saturateVal if c in '1234567890.'])
                    saturateVal = float(saturateVal)
                if('Carbohydrate' in soup[i].text):
                    carbsVal = soup[i + 1].text
                    carbsVal = ''.join([c for c in carbsVal if c in '1234567890.'])
                    carbsVal = float(carbsVal)
                if('of which sugars' in soup[i].text):
                    sugarVal = soup[i + 1].text
                    sugarVal = ''.join([c for c in sugarVal if c in '1234567890.'])
                    sugarVal = float(sugarVal)
                if('Fibre' in soup[i].text):
                    fibreVal = soup[i + 1].text
                    fibreVal = ''.join([c for c in fibreVal if c in '1234567890.'])
                    fibreVal = float(fibreVal)
                if('Protein' in soup[i].text):
                    proteinVal = soup[i + 1].text
                    proteinVal = ''.join([c for c in proteinVal if c in '1234567890.'])
                    proteinVal = float(proteinVal)
                if('Salt' in soup[i].text):
                    saltVal = soup[i + 1].text
                    saltVal = ''.join([c for c in saltVal if c in '1234567890.'])
                    saltVal = float(saltVal)
                i = i + 1
                
            
                
            newProduct = {"Title":title, "Price":price, "Vegetarian": 0, "Energy": energyVal, "Fat": fatVal, "Saturates": saturateVal,
                                        "Carbohydrate": carbsVal, "Sugars": sugarVal, "Fibre":fibreVal, "Protein":proteinVal,
                                        "Salt": saltVal}
            #print(newProduct)
            if newProduct not in items:
                items.append(newProduct)
                    
                
                
csv_columns = ["Title", "Price", "Vegetarian", "Energy", "Fat", "Saturates", "Carbohydrate", "Sugars", "Fibre", "Protein", "Salt"]
csv_file = "morrisonsForOne.csv"
try:
    with open(csv_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns, delimiter=",")
        writer.writeheader()
        for data in items:
            writer.writerow(data)
except IOError:
    print("I/O Error!")