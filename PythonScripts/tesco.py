# -*- coding: utf-8 -*-
"""
Created on Thu Feb 27 23:37:26 2020


If youve opened this script please read another
theyre a lot neater!

 
@author: mlewe
"""

import requests
from bs4 import BeautifulSoup
import json
import csv

url ="https://www.tesco.com"
items = []
charlieBigham = {}

i = 1
while(i<=5):
    # Get list of all links on page
    linksUrl = ("https://www.tesco.com/groceries/en-GB/shop/fresh-food/ready-meals/all?aisle=Ready%20Meals%20for%201&viewAll=aisle&page=" + str(i))
    i = i + 1
    res = requests.get(linksUrl)
    html = res.content
    newSoup = BeautifulSoup(html, 'html.parser')
    mytags = newSoup.find_all('div',{'class':'product-list-container'})
    tags = newSoup.find_all('a')
    list1=list()
    for tag in tags:
        x = tag.get('href', None)
        list1.append(x)
      
    
    # Collect only values that are not nonetypes
    links = list() 
    for val in list1: 
        if val != None : 
            links.append(val)

    # Create list of product links
    link = "/products/"
    res = list(i for i in links if link in i)
 


    # For all links do this:
    for x in res:
        try:
        
            newUrl= (url + x)
            print(newUrl)
            result = requests.get(newUrl)
            htmlStuff = result.content
            ourSoup = BeautifulSoup(htmlStuff, 'html.parser')
            ourTags = ourSoup('table')
            ourTables = ourSoup.find_all('table', {'class': 'product__info-table'})
            ourTables = ourSoup.find_all('td')
            title = ourSoup.title.string
            title = title[:-18]
            print(title)
            ins = [i.contents for i in ourTables]
            ourTags = ourSoup('span')
            ourSpans = ourSoup.find_all('span', {'class': 'value'})
            price = ourSpans[0]
            price = price.text
            price = float(price)
            print(price)
            veggie = ""
            if ourSoup.find_all('li', {'class': 'food-icon food-icon--vegetarian'}):
                veggie = "True"
            else:
                veggie = "False"
                
                
           
            if len(ins)>=20:
                if "Charlie" in title or "Rustlers" in title:
                    if "-" in ins[3]:
                        # energy
                        energy3 = ourTables[4]
                        energy3 = energy3.text
                        energy3 = energy3[:-4]
                        fat3 = ourTables[7]
                        fat3 = fat3.text
                        fat3 = fat3[:-1]
                        fat3 = float(fat3)
            
            # saturates
                        saturates3 = ourTables[10]
                        saturates3 = saturates3.text
                        saturates3 = saturates3[:-1]
                        saturates3 = float(saturates3)
            
            # carbohydrate
                        carbohydrate3 = ourTables[13]
                        carbohydrate3 = carbohydrate3.text
                        carbohydrate3 = carbohydrate3[:-1]
                        carbohydrate3 = float(carbohydrate3)
            
            # sugars
                        sugars3 = ourTables[16]
                        sugars3 = sugars3.text
                        sugars3 = sugars3[:-1]
                        sugars3 = float(sugars3)
            
            
            # protein
                        protein3 = ourTables[19]
                        protein3 = protein3.text
                        protein3 = protein3[:-1]
                        protein3 = float(protein3)
            
            #salt 
                        salt3 = ourTables[22]
                        salt3 = salt3.text
                        salt3 = salt3[:-1]
                        salt3 = float(salt3)
                        charlieBigham = { "Title": title, "Price": price, "Vegetarian": veggie, "Energy": energy3, "Fat": fat3, "Saturates": saturates3,
                                                 "Carbohydrate": carbohydrate3, "Sugars": sugars3, "Fibre": "Not Available", "Protein": protein3, "Salt": salt3}
                    else:
                        # energy
                        energy2 = ourTables[1]
                        energy2 = energy2.text
                        energy2 = energy2[7:-4]
            
            
            # fat
                        fat2 = ourTables[4]
                        fat2 = fat2.text
                        fat2 = fat2[:-1]
                        fat2 = float(fat2)
            
            # saturates
                        saturates2 = ourTables[7]
                        saturates2 = saturates2.text
                        saturates2 = saturates2[:-1]
                        saturates2 = float(saturates2)
            
            # carbohydrate
                        carbohydrate2 = ourTables[10]
                        carbohydrate2 = carbohydrate2.text
                        carbohydrate2 = carbohydrate2[:-1]
                        carbohydrate2 = float(carbohydrate2)
            
            # sugars
                        sugars2 = ourTables[13]
                        sugars2 = sugars2.text
                        sugars2 = sugars2[:-1]
                        sugars2 = float(sugars2)
            
            # protein
                        protein2 = ourTables[16]
                        protein2 = protein2.text
                        protein2 = protein2[:-1]
                        protein2 = float(protein2)
            
            #salt 
                        salt2 = ourTables[19]
                        salt2 = salt2.text
                        salt2 = salt2[:-1]
                        salt2 = float(salt2)
            
                        charlieBigham = { "Title":title, "Price": price, "Vegetarian": veggie, "Energy": energy2, "Fat": fat2, "Saturates": saturates2,
                                                 "Carbohydrate": carbohydrate2, "Sugars": sugars2, "Fibre": "Not Available", "Protein": protein2, "Salt": salt2}
                        print("REEEEEEEEEEEEEEEEEEEEEEEEEEEE")
                    
                else:
                    # energy
                    energy = ourTables[1]
                    energy = energy.text
                    energy = energy[8:-4]
            
            
            # fat
                    fat = ourTables[4]
                    fat = fat.text
                    fat = fat[:-1]
                    fat = float(fat)
            
            # saturates
                    saturates = ourTables[7]
                    saturates = saturates.text
                    saturates = saturates[:-1]
                    saturates = float(saturates)
            
            # carbohydrate
                    carbohydrate = ourTables[10]
                    carbohydrate = carbohydrate.text
                    carbohydrate = carbohydrate[:-1]
                    carbohydrate = float(carbohydrate)
            
            # sugars
                    sugars = ourTables[13]
                    sugars = sugars.text
                    sugars = sugars[:-1]
                    sugars = float(sugars)
            
            #fibre
                    fibre = ourTables[16]
                    fibre = fibre.text
                    fibre = fibre[:-1]
                    fibre = float(fibre)
            
            # protein
                    protein = ourTables[19]
                    protein = protein.text
                    protein = protein[:-1]
                    protein = float(protein)
            
            #salt 
                    salt = ourTables[22]
                    salt = salt.text
                    salt = salt[:-1]
                    salt = float(salt)
                    nutritionalValues= {"Title": title, "Price": price, "Vegetarian": veggie, "Energy": energy, "Fat": fat, "Saturates": saturates, "Carbohydrate": carbohydrate,
                                           "Sugars": sugars, "Fibre": fibre, "Protein": protein, "Salt": salt}
                    print("YEEEEEEEEEEEEEEEEEEEEET")
             
                if nutritionalValues not in items:
                    items.append(nutritionalValues)
                if charlieBigham not in items:
                    items.append(charlieBigham)
                
        except ValueError:
            pass

    

    for x in items:
        print(x, "\n")
    
    
#with open("tescoForTwo.json", "w") as write_file:
#    json.dump(items, write_file, ensure_ascii=False)
#   
    
csv_columns = ["Title", "Price", "Vegetarian", "Energy", "Fat", "Saturates", "Carbohydrate", "Sugars", "Fibre", "Protein", "Salt"]
csv_file = "tescoForOne.csv"
try:
    with open(csv_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns, delimiter=",")
        writer.writeheader()
        for data in items:
            writer.writerow(data)
except IOError:
    print("I/O Error!")
 




