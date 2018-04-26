zingchart.THEME="classic";
    var myConfig = {
        "background-color":"white",
        "type":"line",
        "title":{
            "text":"Evolution of the number of sports by event",
            "color":"#333",
            "background-color":"white",
            "width":"60%",
            "text-align":"left",
        },
    	"legend":{
      			"highlight-plot":true,
      			"max-items":18,
    				"overflow":"scroll",
            "layout":"x1",
            "margin-top":"10%",
            "border-width":"0",
            "shadow":false,
            "marker":{
                "cursor":"hand",
                "border-width":"0"
            },
            "background-color":"white",
            "item":{
                "cursor":"hand"
            },
            "toggle-action":"remove"
        },
    	"scaleX":{
            "values":"1896:2016:4",
            "max-items":30
    	},
    	"scaleY":{
            "line-color":"#333",
            "values":"0:50:5",
            "max-items":30
    	},
        //"tooltip":{
            //"text":"%t: %v outbreaks in %k"
        //},
    	"plot":{
            "line-width":3,
            "marker":{
                "size":2
            },
            "selection-mode":"multiple",
            "background-mode":"graph",
            "selected-state":{
                "line-width":4
            },
            "background-state":{
                "line-color":"#eee",
                "marker":{
                    "background-color":"none"
                }
            }
    	},
        "plotarea":{
            "margin":"15% 25% 10% 7%"
        },
        
    	"series":[
            {
                "values":[[1896,12],[1900,23],[1904,25],[1906,21],[1908,26],[1912,30], ,[1920,29],[1924,27],[1928,27],[1932,29],[1936,29], , ,[1948,33],[1952,33],[1956,33],[1960,34],[1964,36],[1968,36],[1972,38],[1976,37],[1980,38],[1984,41],[1988,42],[1992,43],[1996,44],[2000,46],[2004,46],[2008,47],[2012,47],[2016,47]],
                "data-fullname":["<strong>12</strong>","<strong>23</strong><br>ajout des épreuves de : <br>60m <br>200m <br>200m haies <br>400m haies <br>2500m steeple <br>4000m steeple <br>5000m par équipe <br>saut en hauteur sans élan <br>triple saut sans élan <br>saut en hauteur sans élan <br>lancer de marteau","<strong>25</strong><br>ajout des épreuves de : <br>2590m steeple<br>Cross par équipe (4 miles) <br>lancer de poids (25.4kg)<br> triathlon <br> décathlon<br><br> suppression des épreuves de : <br>2500m steeple<br> 4000m steeple <br> 5000m par équipe","<strong>21</strong><br>ajout des épreuves de : <br>5 miles<br>1500m marche <br>3000m marche <br> lancer de disque, style ancien <br> lancer de javelot <br> lancer de poids (6,4 kg<br> pentathlon <br><br>suppression des épreuves de : <br> 60m <br> 200m <br> 200m haies <br> 400m haies <br> 2590m steeple <br> cross par équipe (4 miles) <br> triple saut sans élan <br> lancer de marteau <br> lancer de poids (25.4kg)<br> triathlon<br> décathlon","<strong>26</strong><br>ajout des épreuves de : <br>200m <br>3200m steeple <br> relais olympique <br> 3 miles par équipe <br> 5 miles <br> marathon <br> 3500m marche <br> 10 miles marche <br> disque grec <br> <br>suppression des épreuves de : <br> 1500m marche <br> 3000m marche <br> lancer de disque, style ancien <br> lancer de poids (6.4kg) <br> pentathlon","<strong>26</strong><br>ajout des épreuves de : <br> 10000m <br> 4x100m <br> 4x400m <br> cross-country individuel <br> cross-country par équipes <br> lancer de poids à 2 mains <br> lancer de javelot à 2 mains <br> pentathlon <br> décathlon <br> <br> suppression des épreuves de <br>  400m haies <br>  3200m steeple <br>  relais olympique <br>  3500m marche <br> lancer de disque grec <br> lancer de javelot style libre",,"<strong>29</strong><br>ajout des épreuves de :<br> 400m haies <br> 3000m steeple <br> 3000m par équipe <br> 3000m marche <br> lancer de poids (25.4kg) <br><br> suppression des épreuves de : <br> saut en longueur sans élan <br> saut en hauteur sans élan <br> lancer de poids à 2 mains <br>  lancer de disque à 2 mains <br>  ","<strong>27</strong><br>suppression des épreuves de :<br> 3000m marche <br> lancer de poids (25,4kg) <br> ","<strong>27</strong><br>Fait marquant :<br>ajout des 5 premières épreuves féminines<br><br>ajout des épreuves de :<br> 100m chez les femmes<br>800m chez les femmes<br> 4x100m chez les femmes <br> saut en hauteur chez les femmes <br> lancer de disque chez les femmes<br><br>suppression des épreuves de :<br> cross individuel<br> 10km marche<br>3000m par équipe <br> cross-country par équipe <br> pentathlon","<strong>29</strong><br> ajout des épreuves de :<br> 50km marche chez les hommes<br> 80m haies chez les femmes <br>  lancer de javelot chez les femmes <br><br>  suppression des épreuves de :<br> 800m chez les femmes <br>","<strong>29</strong>",,,"<strong>33</strong><br> ajout des épreuves de :<br> 10km marche chez les hommes<br> 200m chez les femmes<br> saut en longueur chez les femmes<br> lancer de poids chez les femmes<br>","<strong>33</strong>","<strong>33</strong> <br>ajout des épreuves de :<br> 20km marche chez les hommes <br> suppression des épreuves de :<br> 0km marche chez les hommes","<strong>34</strong> <br>ajout des épreuves de :<br> 800m chez les femmes","<strong>36</strong> <br>ajout des épreuves de :<br> 400m chez les femmes <br> pentathlon chez les femmes","<strong>36</strong>","<strong>38</strong> <br>ajout des épreuves de :<br> 100m haies chez les femmes <br> 1500m chez les femmes <br> 4x400m chez les femmes <br><br>suppression des épreuves de : <br> 80m haies chez les femmes","<strong>37</strong> <br>suppression des épreuves de : <br> 50km marche chez les hommes ","<strong>38</strong> <br>ajout des épreuves de : <br> 50km marche chez les hommes","<strong>41</strong> <br>ajout des épreuves de :<br> marathon chez les femmes <br>","<strong>42</strong> <br>ajout des épreuves de :<br> 10000m chez les femmes <br>","<strong>43</strong> <br>ajout des épreuves de :<br> 10km marche chez les femmes <br>","<strong>44</strong> <br>ajout des épreuves de :<br> triple saut chez les femmes <br>","<strong>46</strong> <br>ajout des épreuves de :<br> saut à la perche chez les femmes<br> lancer de marteau chez les femmes","<strong>46</strong>","<strong>47</strong> <br>ajout des épreuves de :<br> 3000m steeple chez les femmes","<strong>47</strong>","<strong>47</strong>"],
                "tooltip": {
      						"text": "%data-fullname",
                            "height": "auto",
      						"placement": "node:top",
      						"padding": "10%",
      						"border-radius": "5px"
    								},
                "text":"Athletics",
                "line-color":"#a6cee3",
                "marker":{
                    "background-color":"#a6cee3",
                    "border-color":"#a6cee3"
                }
            },
            {
                "values": [[1896,0],[1900,5],[1904,5],[1906,6],[1908,4],[1912,4], ,[1920,5],[1924,7],[1928,7],[1932,7],[1936,7], , ,[1948,7],[1952,7],[1956,7],[1960,7],[1964,7],[1968,7],[1972,7],[1976,14],[1980,14],[1984,14],[1988,14],[1992,14],[1996,14],[2000,14],[2004,14],[2008,14],[2012,14],[2016,14]],
                "text":"Rowing",
                "visible":false,
                "line-color":"#1f78b4",
                "marker":{
                    "background-color":"#1f78b4",
                    "border-color":"#1f78b4"
                }
            },
            {
                "values": [[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,0],[1992,4],[1996,5],[2000,5],[2004,5],[2008,5],[2012,5],[2016,5]],
                "text":"Badminton",
                "visible":false,
                "line-color":"#b2df8a",
                "marker":{
                    "background-color":"#b2df8a",
                    "border-color":"#b2df8a"
                }
            },
            {
                "values": [[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,1], , ,[1948,1],[1952,1],[1956,1],[1960,1],[1964,1],[1968,1],[1972,1],[1976,2],[1980,2],[1984,2],[1988,2],[1992,2],[1996,2],[2000,2],[2004,2],[2008,2],[2012,2],[2016,2]],
                "text":"Basket-ball",
                "visible":false,
                "line-color":"#33a02c",
                "marker":{
                    "background-color":"#33a02c",
                    "border-color":"#33a02c"
                }
            },
            {
                "values": [[1896,0],[1900,0],[1904,7],[1906,0],[1908,5],[1912,0], ,[1920,8],[1924,8],[1928,8],[1932,8],[1936,8], , ,[1948,8],[1952,10],[1956,10],[1960,10],[1964,10],[1968,11],[1972,11],[1976,11],[1980,11],[1984,12],[1988,12],[1992,12],[1996,12],[2000,12],[2004,11],[2008,11],[2012,13],[2016,13]],
                "text":"Boxing",
                "visible":false,
                "line-color":"#fb9a99",
                "marker":{
                    "background-color":"#fb9a99",
                    "border-color":"#fb9a99"
                }
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,9],[1952,9],[1956,9],[1960,9],[1964,7],[1968,7],[1972,11],[1976,7],[1980,11],[1984,11],[1988,12],[1992,16],[1996,16],[2000,16],[2004,16],[2008,16],[2012,16],[2016,16]],
                "text":"Canoe",
                "visible":false,
                "line-color":"#e31a1c",
                "marker":{
                    "background-color":"#e31a1c",
                    "border-color":"#e31a1c"
                }
            },
            {
                "values":[[1896,6],[1900,2],[1904,7],[1906,6],[1908,6],[1912,2], ,[1920,6],[1924,6],[1928,6],[1932,6],[1936,6], , ,[1948,6],[1952,6],[1956,6],[1960,6],[1964,7],[1968,7],[1972,7],[1976,6],[1980,6],[1984,8],[1988,9],[1992,10],[1996,14],[2000,18],[2004,18],[2008,18],[2012,18],[2016,18]],
                "text":"Cycling",
                "visible":false,
                "line-color":"#fdbf6f",
                "marker":{
                    "background-color":"#fdbf6f",
                    "border-color":"#fdbf6f"
                }
            },
            {
                "values":[[1896,0],[1900,3],[1904,0],[1906,0],[1908,0],[1912,5], ,[1920,7],[1924,5],[1928,6],[1932,5],[1936,6], , ,[1948,6],[1952,6],[1956,6],[1960,5],[1964,6],[1968,6],[1972,6],[1976,6],[1980,6],[1984,6],[1988,6],[1992,6],[1996,6],[2000,6],[2004,6],[2008,6],[2012,6],[2016,6]],
                "text":"Horse riding",
                "visible":false,
                "line-color":"#ff7f00",
                "marker":{
                    "background-color":"#ff7f00",
                    "border-color":"#ff7f00"
                }
            },
            {
                "values":[[1896,3],[1900,7],[1904,5],[1906,8],[1908,4],[1912,5], ,[1920,6],[1924,7],[1928,7],[1932,7],[1936,7], , ,[1948,7],[1952,7],[1956,7],[1960,8],[1964,8],[1968,8],[1972,8],[1976,8],[1980,8],[1984,8],[1988,8],[1992,8],[1996,10],[2000,10],[2004,10],[2008,10],[2012,10],[2016,10]],
                "text":"Fencing",
                "visible":false,
                "line-color":"#cab2d6",
                "marker":{
                    "background-color":"#cab2d6",
                    "border-color":"#cab2d6"
                }
            },
            {
                "values":[[1896,0],[1900,1],[1904,1],[1906,1],[1908,1],[1912,1], ,[1920,1],[1924,1],[1928,1],[1932,0],[1936,1], , ,[1948,1],[1952,1],[1956,1],[1960,1],[1964,1],[1968,1],[1972,1],[1976,1],[1980,1],[1984,1],[1988,1],[1992,1],[1996,2],[2000,2],[2004,2],[2008,2],[2012,2],[2016,2]],
                "text":"Football",
                "visible":false,
                "line-color":"#ffff99",
                "marker":{
                    "background-color":"#ffff99",
                    "border-color":"#ffff99"
                }
            },
            {
                "values":[[1896,0],[1900,2],[1904,2],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,0],[1992,0],[1996,0],[2000,0],[2004,0],[2008,0],[2012,0],[2016,2]],
                "text":"Golf",
                "visible":false,
                "line-color":"#6a3d9a",
                "marker":{
                    "background-color":"#6a3d9a",
                    "border-color":"#6a3d9a"
                }
            },
            {
                "values":[[1896,8],[1900,1],[1904,11],[1906,4],[1908,2],[1912,4], ,[1920,4],[1924,9],[1928,8],[1932,11],[1936,9], , ,[1948,9],[1952,15],[1956,15],[1960,14],[1964,14],[1968,14],[1972,14],[1976,14],[1980,14],[1984,14],[1988,15],[1992,15],[1996,16],[2000,18],[2004,18],[2008,18],[2012,18],[2016,18]],
                "text":"Gymnastic",
                "visible":false,
                "line-color":"#b15928",
                "marker":{
                    "background-color":"#b15928",
                    "border-color":"#b15928"
                }
            },
            {
                "values":[[1896,2],[1900,0],[1904,2],[1906,2],[1908,0],[1912,0], ,[1920,5],[1924,5],[1928,5],[1932,5],[1936,5], , ,[1948,6],[1952,7],[1956,7],[1960,7],[1964,7],[1968,7],[1972,9],[1976,9],[1980,10],[1984,10],[1988,10],[1992,10],[1996,10],[2000,15],[2004,15],[2008,15],[2012,15],[2016,15]],
                "visible":false,
                "text":"Lifting"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,1], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,1],[1976,2],[1980,2],[1984,2],[1988,2],[1992,2],[1996,2],[2000,2],[2004,2],[2008,2],[2012,2],[2016,2]],
                "visible":false,
                "text":"Handball"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,1],[1912,0], ,[1920,1],[1924,0],[1928,1],[1932,1],[1936,1], , ,[1948,1],[1952,1],[1956,1],[1960,1],[1964,1],[1968,1],[1972,1],[1976,1],[1980,2],[1984,2],[1988,2],[1992,2],[1996,2],[2000,2],[2004,2],[2008,2],[2012,2],[2016,2]],
                "visible":false,
                "text":"Ice hockey"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,4],[1968,0],[1972,6],[1976,6],[1980,8],[1984,8],[1988,7],[1992,14],[1996,14],[2000,14],[2004,14],[2008,14],[2012,14],[2016,14]],
                "visible":false,
                "text":"Judo"
            },
            {
                "values":[[1896,1],[1900,0],[1904,0],[1906,4],[1908,10],[1912,5], ,[1920,10],[1924,13],[1928,13],[1932,14],[1936,14], , ,[1948,16],[1952,16],[1956,16],[1960,16],[1964,16],[1968,16],[1972,20],[1976,20],[1980,20],[1984,20],[1988,20],[1992,20],[1996,20],[2000,16],[2004,18],[2008,18],[2012,18],[2016,18]],
                "visible":false,
                "text":"Wrestling"
            },
            {
                "values":[[1896,4],[1900,8],[1904,12],[1906,5],[1908,9],[1912,14], ,[1920,16],[1924,17],[1928,16],[1932,16],[1936,16], , ,[1948,16],[1952,16],[1956,18],[1960,20],[1964,23],[1968,34],[1972,34],[1976,31],[1980,31],[1984,36],[1988,38],[1992,38],[1996,38],[2000,44],[2004,44],[2008,46],[2012,46],[2016,46]],
                "text":"Swimming"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,1], ,[1920,1],[1924,1],[1928,1],[1932,1],[1936,1], , ,[1948,1],[1952,2],[1956,2],[1960,2],[1964,2],[1968,2],[1972,2],[1976,2],[1980,2],[1984,2],[1988,2],[1992,2],[1996,2],[2000,1],[2004,2],[2008,2],[2012,2],[2016,2]],
                "visible":false,
                "text":"Modern pentathlon"
            },
            {
                "values":[[1896,0],[1900,1],[1904,0],[1906,0],[1908,1],[1912,0], ,[1920,1],[1924,1],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,0],[1992,0],[1996,0],[2000,0],[2004,0],[2008,0],[2012,0],[2016,2]],
                "visible":false,
                "text":"Rugby"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,0],[1992,0],[1996,0],[2000,8],[2004,8],[2008,8],[2012,8],[2016,8]],
                "visible":false,
                "text":"Taekwondo"
            },
            {
                "values":[[1896,2],[1900,4],[1904,2],[1906,4],[1908,6],[1912,8], ,[1920,5],[1924,5],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,4],[1992,4],[1996,4],[2000,4],[2004,4],[2008,4],[2012,5],[2016,5]],
                "visible":false,
                "text":"Tennis"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,4],[1992,4],[1996,4],[2000,4],[2004,4],[2008,4],[2012,4],[2016,4]],
                "visible":false,
                "text":"Table tennis"
            },
            {
                "values":[[1896,0],[1900,6],[1904,6],[1906,0],[1908,3],[1912,0], ,[1920,10],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,2],[1976,2],[1980,2],[1984,2],[1988,4],[1992,4],[1996,4],[2000,4],[2004,4],[2008,4],[2012,4],[2016,4]],
                "visible":false,
                "text":"Archery"
            },
            {
                "values":[[1896,5],[1900,9],[1904,0],[1906,16],[1908,15],[1912,18], ,[1920,21],[1924,10],[1928,0],[1932,2],[1936,3], , ,[1948,4],[1952,7],[1956,7],[1960,6],[1964,6],[1968,7],[1972,8],[1976,7],[1980,7],[1984,11],[1988,13],[1992,13],[1996,15],[2000,17],[2004,17],[2008,15],[2012,15],[2016,15]],
                "visible":false,
                "text":"Shooting"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,0],[1968,0],[1972,0],[1976,0],[1980,0],[1984,0],[1988,0],[1992,0],[1996,0],[2000,2],[2004,2],[2008,2],[2012,2],[2016,2]],
                "visible":false,
                "text":"Triathlon"
            },
            {
                "values":[[1896,0],[1900,0],[1904,0],[1906,0],[1908,0],[1912,0], ,[1920,0],[1924,0],[1928,0],[1932,0],[1936,0], , ,[1948,0],[1952,0],[1956,0],[1960,0],[1964,2],[1968,2],[1972,2],[1976,2],[1980,2],[1984,2],[1988,2],[1992,2],[1996,2],[2000,4],[2004,4],[2008,4],[2012,4],[2016,4]],
                "visible":false,
                "text":"Volleyball"
            },
            {
                "values":[[1896,0],[1900,7],[1904,0],[1906,0],[1908,4],[1912,4], ,[1920,14],[1924,3],[1928,3],[1932,4],[1936,4], , ,[1948,5],[1952,5],[1956,5],[1960,5],[1964,5],[1968,5],[1972,6],[1976,6],[1980,6],[1984,7],[1988,8],[1992,10],[1996,10],[2000,11],[2004,11],[2008,11],[2012,10],[2016,10]],
                "visible":false,
                "text":"Sailing",
            },
    	], 
    };
     
    zingchart.render({ 
    	id : 'myChar', 
    	data : myConfig, 
    	height: 500, 
    	width: 725 
    });
