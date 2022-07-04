# -*- coding: utf-8 -*-
from datetime import date

birthyear = 2001
birthmonth = 8
birthday = 20

daynow = date.today().strftime('%Y-%m-%d').split('-')
age_y = int(daynow[0])-int(birthyear)
age_m = int(daynow[1])-int(birthmonth)
age_d = int(daynow[2])-int(birthday)

print ('วันปัจจุบัน '+date.today().strftime('%d-%m-%Y'))
print ('วันเกิด %d - %d - %d'%(birthday,birthmonth,birthyear))
print ('===============================')
print ('อายุของคุณ %d ปี %d เดือน %d วัน' %( age_y,age_m,age_d))
