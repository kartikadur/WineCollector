(: for $x in doc('WineSchema.xml')//bottle
where $x/wine[contains(variety,'Chardonnay')]
return $x/wine :)

for $x in doc('WineSchema.xml')//bottle
where $x/wine/descriptors/fruit/text() = 'BlueBerry'
return $x/wine
