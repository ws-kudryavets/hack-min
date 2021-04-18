#!/usr/bin/env python
# -*- coding: utf-8 -*-
import requests
import json
import time

import vk
import getpass
import vk_api
import random
import os

import os
import sys
import vk_api
import urllib
import urllib.request

import cv2
import utils
import matplotlib.pyplot as plt

import pandas as pd
import re



word = re.compile(r'"(.*?)"')
def get_name(x):
    x = x.replace("«", '"').replace("»", '"')
    x = word.findall(x)
    x = [w[0].upper() for w in x[0].split()]
    return ''.join(x).replace("(", '').replace(")", '')


def get_init():
	headers = {'Content-type': 'application/json'}
	data = { "auth_token": "YOUR_AUTH_TOKEN", "current": ((0))}
	r = requests.post('http://mon.hack48.ru:3030/widgets/its', data=json.dumps(data), headers=headers)
	
	data = { "auth_token": "YOUR_AUTH_TOKEN", "value": ((59))}
	r = requests.post('http://mon.hack48.ru:3030/widgets/ege_ball', data=json.dumps(data), headers=headers)
	
	headers = {'Content-type': 'application/json'}
	items = []
	data = { "auth_token": "YOUR_AUTH_TOKEN", "items": (items)}
	r = requests.post('http://mon.hack48.ru:3030/widgets/donors', data=json.dumps(data), headers=headers)
	
	data = { "auth_token": "YOUR_AUTH_TOKEN", "points": [{"x":10368000,"y":3259},{"x":10368000 + 30*24*60*60,"y":2807},{"x":10368000 + 30*24*60*60*2,"y":7230},{"x":10368000 + 30*24*60*60*3,"y":1464},{"x":10368000 + 30*24*60*60*4,"y":1019}, {"x":10368000 + 30*24*60*60*5,"y":2997},{"x":10368000 + 30*24*60*60*6,"y":3257}, {"x":10368000 + 30*24*60*60*7,"y":3674},{"x":10368000 + 30*24*60*60*8,"y":3524},{"x":10368000 + 30*24*60*60*9,"y":4246},{"x":10368000 + 30*24*60*60*10,"y":3762},{"x":10368000 + 30*24*60*60*11,"y":3637},{"x":10368000 + 30*24*60*60*12,"y":4281},{"x":10368000 + 30*24*60*60*13,"y":4195},{"x":10368000 + 30*24*60*60*14,"y":5643},{"x":10368000 + 30*24*60*60*15,"y":9896},{"x":10368000 + 30*24*60*60*16,"y":2010},{"x":10368000 + 30*24*60*60*17,"y":4232},{"x":10368000 + 30*24*60*60*18,"y":4711},{"x":10368000 + 30*24*60*60*19,"y":5605},{"x":10368000 + 30*24*60*60*20,"y":5082},{"x":10368000 + 30*24*60*60*21,"y":5007},{"x":10368000 + 30*24*60*60*22,"y":4488},{"x":10368000 + 30*24*60*60*23,"y":5455} ]}
	r = requests.post('http://mon.hack48.ru:3030/widgets/ege3', data=json.dumps(data), headers=headers)
	

def get_monitoring():
	df = pd.read_html("https://monitoring.miccedu.ru/iam/2020/_vpo/material.php?type=2&id=10703", header=1)
	
	df = df[-1].iloc[:, [1, 2, 3]]
	df.columns = [
		'Вуз', 'Математические и естественные науки',
		'Инженерноедело,технологии итехническиенауки'
	]
	df = df.fillna(0)
	df = df.sort_values(by='Математические и естественные науки', ascending=False)
	top5 = df['Вуз'].values.tolist()[:5]
	#for i in range(0, len(df)-1):
	#	print (get_name((df["Вуз"][i])))
	#	print (((df["Математические и естественные науки"][i])))
	#print (df[1][1])
	time.sleep(5)
	['ЮФУ', 'РГЭУ', 'ДГАУ', 'ДГТУ', 'ЮГПУИМП']
	top5 = [get_name(t) for t in top5]
	print (top5)
	time.sleep(10)


appid = '4862755'
key = '9e57e3e44d6d1f813a4c9e85a63e84950bfc20a784f5823fd0d9cedbfda6b3c3c8bc9f85b209d9fd00d16'
key = 'e98175fd6129ec7769a810fdff1066b5fb18119b10a2ab1434da51cec0c28c847ee2acb50a5e129b515ff'

session = vk.Session(access_token=key)
vk_api = vk.API(session)

words = ["инфо", "информ", "связ", "радио", "телеком", "матем", "вычисл", "програм", "компьютер", "крипт"]


def chek_file (fname):
	#print (fname)
	#face_cascade = cv2.CascadeClassifier(utils.get_haarcascade_path('haarcascade_frontalface_default.xml'))
	face_cascade = cv2.CascadeClassifier('C:\LOM\haarcascade_frontalface_default.xml')
	img = cv2.imread(fname)
	gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
	faces = face_cascade.detectMultiScale(gray, 1.3, 5)
	#print(faces)
	#print (len(faces))
	#for (x, y, w, h) in faces:
	#	cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
	#	roi_gray = gray[y:y+h, x:x+w]
	#	roi_color = img[y:y+h, x:x+w]
	#img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
	#plt.figure()
	#plt.imshow(img)
	#plt.show(block=False)
	#plt.pause(1)
	#plt.close()
	if (len(faces))<3:
		os.remove(fname)
		print ("<3")
		return 0
	else:
		return 1
			
def get_photos(gid):
	newpath = "C://MON" 
	#os.path.join(sys.path[0], 'save')
	if not os.path.exists(newpath):
			os.makedirs(newpath)
	# посылаем запрос к VK API, count свой, но не более 200
	id_list = gid
	j = 0
	z = len (id_list)
	itog = 0
	for id_user in id_list:
		j = j + 1
		print (str(j) + ' из ' + str(z))
		print (("Сохранено ") + str(itog) + (" фото"))
		try:
			print (id_user)
			response = vk_api.photos.getAll(owner_id = int(id_user), v = "5.92", count = 10)
			#print (response)
				 # работаем с каждой полученной фотографией
			for i in range(len(response["items"])):
				# берём ссылку на максимальный размер фотографии
				photo_url = str(response["items"][i]["sizes"][len(response["items"][i]["sizes"])-1]["url"])
				print (photo_url)
				# скачиваем фото в папку с ID пользователя
				urllib.request.urlretrieve(photo_url, newpath + '/' + str(response["items"][i]['id']) + '.jpg')
				fname = newpath + '/' + str(response["items"][i]['id']) + '.jpg'
				itog = itog + chek_file(fname)
		except:
			print ("Ошибка")
			time.sleep(1)
	return (1)
	
def get_members(liner):	
	n = 0
	m = vk_api.groups.getMembers(group_id = liner, v = "5.92", offset = n)['count']
	a = []
	while n<m:
		response = vk_api.groups.getMembers(group_id = liner, v = "5.92", offset = n)['items']
		print (response)
		a = a + response
		n = n + 1000
		time.sleep(1)
	print (len(a))
	print ("!!!")
	print (a)
	return a
	
def send_static():
	headers = {'Content-type': 'application/json'}
	items = [{"label": "ЮФУ", "value": "100"}, {"label": "ДГТУ", "value": "2"}, {"label": "РГЭУ (РиНХ)", "value": "2"} , {"label": "ЮРГПУ(НПИ)", "value": "22"},{"label": "РГУПС", "value": "22"}]
	data = { "auth_token": "YOUR_AUTH_TOKEN", "items": (items)}
	r = requests.post('http://mon.hack48.ru:3030/widgets/university', data=json.dumps(data), headers=headers)

	
def get_user_info(uid):	
	n = 0
	#uid = vk_api.users.get(user_ids = "artem.sergeevich.popov",  v = "5.92")[0].get("id") 
	#uid = vk_api.users.get(user_ids = "av_kokhan",  v = "5.92")[0].get("id") 
	print (uid)
	print ("###")
	try:
		with open("profile.txt", "a") as a_file:
			a_file.write(str(uid))
			a_file.write("\n")
			a_file.close()
		lines = list(open("profile.txt", "r"))
		headers = {'Content-type': 'application/json'}
		data = { "auth_token": "YOUR_AUTH_TOKEN", "current": (len(lines))}
		r = requests.post('http://mon.hack48.ru:3030/widgets/profile', data=json.dumps(data), headers=headers)
	except:
		print ("Ошибка записи")
	
	response = vk_api.users.get(user_ids = int(uid), fields = "home_town,  city, education, career, interests, screen_name", v = "5.92")
	print (response)
	
	try:
		home_town = response[0].get("home_town")
		home_city = response[0].get("city")
		print ("Родной город: " + str(home_town))
		home_region = vk_api.database.getCities(country_id=1, q= home_town,  v = "5.21")['items'][0].get("region")
		print ("Родной регион: " + str(home_region))
	except:
		print ("Родной город: " + "Не найдено")
		print ("Родной регион: " + "Не найдено")
	
	try:
		now_city = str(home_city.get("title"))
		now_region = vk_api.database.getCities(country_id=1, q=str(home_city.get("title")),  v = "5.21")['items'][0].get("region")
	except:
		now_city = "Не найдено"
		now_region = "Не найдено"
	print ("Текущий город: " + str(now_city))
	print ("Текущий регион: " + str(now_region))
	
	univer = response[0].get("university_name") 
	univer_id = response[0].get("university")
	faculty_name = response[0].get("faculty_name")
	print ("Образование: "+ str(univer) + " "+ str(faculty_name))
	#Работают на другой регион
	s = (str(univer)+ " " + str(faculty_name)).lower()
	for ch in words:
		z = s.find(ch)
		#print (z)
		if (z >=0):
			print ("ИТ-шник по образованию")
			try:
				with open("its.txt", "a") as a_file:
					a_file.write(str(uid))
					a_file.write("\n")
					a_file.close()
				lines = list(open("its.txt", "r"))
				headers = {'Content-type': 'application/json'}
				data = { "auth_token": "YOUR_AUTH_TOKEN", "current": (len(lines))}
				r = requests.post('http://mon.hack48.ru:3030/widgets/its', data=json.dumps(data), headers=headers)
				if (now_region == "Ростовская область") and (home_region != "Ростовская область") and (home_region != None):
					print (home_region)
					with open("donors.txt", "a") as a_file:
						a_file.write(str(home_region))
						a_file.write("\n")
						a_file.close()
						try:
							lines = list(open("donors.txt", "r"))
							df = pd.DataFrame(lines) 
							a = df[0].value_counts().nlargest(5)
							slovar = a.to_dict()
							items = []
							for direct in slovar.keys():
								items.append({"label": (direct.replace(u"[]", "")), "value": slovar[direct]})
							items = (sorted(items, key=lambda x: x["value"]))
							headers = {'Content-type': 'application/json'}
							data = { "auth_token": "YOUR_AUTH_TOKEN", "items": (items[::-1])}
							r = requests.post('http://mon.hack48.ru:3030/widgets/donors', data=json.dumps(data), headers=headers)
						except:
							print ("Ошибка анализа регионов доноров")
						
				if (now_region == "Ростовская область") and (home_region == "Ростовская область"):
					print (uid)
					print ("Остался в своем регионе")
					with open("ostalis.txt", "a") as a_file:
						a_file.write(str(uid))
						a_file.write("\n")
						a_file.close()
			except:
				print ("Ошибка при сравнении регионов")
			break
	time.sleep(3)
	
	career = response[0].get("career") 
	print (career)
	if career == None:
		print ("!!!!")
	last_work = ""
	try:
		n = len (career)
		print ("Указано мест работы: " + str(n))
		#z = vk_api.groups.getById (group_ids =career[0].get("group_id"), fields = "description", v = "5.92")
		#print (z)
		try:
			last_work = vk_api.groups.getById (group_ids =career[n-1].get("group_id"), fields = "description", v = "5.92")[0].get("name")
			print ("Последнее место работы: " + str(last_work))
		except:
			print ("Без группы вконтакте")
			last_work = career = response[0].get("career")[n-1].get("company")
			print (last_work)
			#print ("Последнее место работы: " + str(last_work))

		#work_region = vk_api.database.getCities(country_id=1, q=home_town,  v = "5.21")['items'][0].get("region")
		#print (career[n-1].get("city_id"))
		time.sleep(2)
		#work_city = vk_api.database.getCitiesById(city_ids = career[n-1].get("city_id"), v = "5.92")[0].get("title")
		#work_region = vk_api.database.getCities(country_id=1, q = work_city,  v = "5.21")['items'][0].get("region")
		#if work_region == None:
			#work_region = work_city
		#print ("Регион работы: " + str(work_region))
	except:
		print ("Не указано место работы: ")
		last_work = ""
	return (last_work)
	
def get_user_groups(uid):
	a = []
	for ch in vk_api.groups.get(user_id = uid, count = 1000,  v = "5.92").get("items"):
		#print (ch)
		a.append(ch)
	return (a)

def main(args):
	print ("__Starting script__")
	get_init()
	#get_monitoring()
	employers = []
	guids = get_members('ictis_sfedu')
	print (guids)
	err = 0
	i = 0 
	vsego = len (guids)
	for ch in guids:
		i = i + 1
		print (str (i) + " из " + str(vsego))
		rez = get_user_info(ch)
		if len (rez)>0:
			employers.append(rez)
			df = pd.DataFrame(employers) 
			a = df[0].value_counts().nlargest(15)
			print (a)
			slovar = a.to_dict()
			#items = [{"label": "Data Science", "value": "5"}, {"label": "1C", "value": "2"}]
			items = []
			for direct in slovar.keys():
				items.append({"label": (direct.replace(u"[]", "")), "value": slovar[direct]})
			items = (sorted(items, key=lambda x: x["value"]))
			#print (items)
			#print (items[::-1])
			headers = {'Content-type': 'application/json'}
			data = { "auth_token": "YOUR_AUTH_TOKEN", "items": (items[::-1])}
			r = requests.post('http://mon.hack48.ru:3030/widgets/company', data=json.dumps(data), headers=headers)
			send_static()
			#print (df)
		time.sleep(1)
		#print (employers)
	print (employers)
	
	get_user_groups("59949877")
	get_user_info("59949877")
	print ()
	get_user_info("53436036")
	time.sleep(2)
	get_user_info("353516")
	#get_photos(guids)
	return 0

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
