# thelo-foli

Föli API:a käyttämällä sovellus, josta voi seurata pysäkkikohtaisesti 
reaaliaikaista dataa Fölin paikallisliikenteen linja-autoista. 
Tarkoituksena on näyttää arvioitu aika, koska bussi on pysäkillä. 
Sovelluksella voi etsiä lähimmät bussipysäkit, sekä tallettaa 
suosikkeja listaan, josta niitä voi tarkastella nopeasti.


1. Päänäkymä
Josta löytyy nopeasti etsintätoiminto pysäkeille.
Pysäkkejä voi etsiä joko yhdestä hakukentästä tai ne jaetaan kahteen
josta toisesta haetaan pysäkkinumeroa ja toisesta pysäkkiä. 

2. Hakutulosten tarkastelu sivu
Lähimmät hakutulokset listattuna allekkain. Hakutulokset haetaan 
allekkain hakutulos sivulle. Jos haun tuloksena on vain yksi 
yksiselitteinen tulos ohjataan käyttäjä suoraan löydetyn pysäkin 
aikataulunäkymään.

3. Aikataulunäkymä
Aikataulunäkymässä on listattu pysäkille saapuvat seuraavat x autoa. 
Aikataulunäkymää voi filtteröitä pysäkin ohi ajavien linjojen numerolla
yksinkertaisesta pudotusvalikosta. 

Aikataulunäkymä näyttää saapuvat autot saapumisjärjestyksessä, 
sekä 20 minuutin tarkkuudella esitetään saapumisaika minuutteina. Yli 
20 minuutin ajat esitetään kellonaikana (esim. 20:48).

Aikataulunäkymässä pysäkin voi myös tallentaa omiin suosikkeihinsa.

4. Suosikkinäkymä
Suosikkinäkymästä voi nopeasti tarkastella suosikkeihinsa tallennettuja
aikatauluja. Suosikkeja voi tästä näkymästä poistaa. Suosikeille voi 
asettaa omia "lempinimiä."