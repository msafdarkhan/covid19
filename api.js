
//Covid API version 1.0
var country=document.currentScript.getAttribute('country');
var lang=document.currentScript.getAttribute('lang');
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(script);

        // Poll for jQuery to come into existance
        var checkReady = function(callback) {
            if (window.jQuery) {
                callback(jQuery);
            }
            else {
                window.setTimeout(function() { checkReady(callback); }, 20);
            }
        };

        // Start polling...
        checkReady(function($) {
            $(function() {
                $.getJSON('https://corona.lmao.ninja/v2/countries/'+country+'?yesterday=0', function(jd) {
                    var preBodyData=document.body.innerHTML;
                    document.head.innerHTML+='<style>.covid-modal {display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);}.covid-modal-content {background-color: #F7F8FE;margin: auto;padding: 20px; border: 1px solid #888;width: 80%;}.covid-close-btn {color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;}.covid-close-btn:hover, .covid-close-btn:focus {color: #000;text-decoration: none;cursor: pointer;}</style>';
                    
                    if(lang=="urdu"){
                        document.body.innerHTML=`
                    <!--Covid campaign-->
                    <div id="covid-modal-19" class="covid-modal">
                        <div class="covid-modal-content">
                            <span class="covid-close-btn">&times;</span>
                            <p style="font-size:18px; text-align:center;"><img src="`+jd.countryInfo.flag+`" alt="CountryImage" width="22px"> &nbsp;<b style="font-size:22px;">پاکستان</b> <img src="`+jd.countryInfo.flag+`" alt="CountryImage" width="22px"></p>
                            <p style="font-size:26px;text-align:center;margin-top:-16px;">مقدمات: <b style="color:#67336E;font-size:36px;">`+jd.cases+`</b>
                            &nbsp;&nbsp; اموات: <b style="color:#CC0404;font-size:36px;">`+jd.deaths+`</b>
                            &nbsp;&nbsp; صحت یاب: <b style="color:#7252FC;font-size:36px;">`+jd.recovered+`</b>
                            </p>
                            <p style="font-size:18px;margin-top:-15px;text-align:center;">
                            مقدمات (<b>24 گھنٹے میں</b>): <b style="color:#005D66;font-size:24px;">`+jd.todayCases+`</b>
                            &nbsp;&nbsp; اموات (<b>24 گھنٹے میں</b>): <b style="color:#FF3B3B;font-size:24px;">`+jd.todayDeaths+`</b>
                            &nbsp;&nbsp; سرگرم: <b style="color:#005D66;font-size:24px;">`+jd.active+`</b>
                            </p>
                            <p style="text-align:center;margin-bottom:10px;"><b><a href="http://prcs.org.pk/" target="_blank" style="text-decoration: none;color:#EC1C33;font-size:19px;">پاکستان ہلالِ احمر</a></b> کی جانب سے</p>
                        </div>
                    </div>
                    `+preBodyData;
                    }
                    else{
                        document.body.innerHTML=`
                    <!--Covid campaign-->
                    <div id="covid-modal-19" class="covid-modal">
                        <div class="covid-modal-content">
                            <span class="covid-close-btn">&times;</span>
                            <p style="font-size:18px; text-align:center;">Status For: <b style="font-size:22px;">`+jd.country+`</b> <img src="`+jd.countryInfo.flag+`" alt="CountryImage" width="22px"></p>
                            <p style="font-size:26px;text-align:center;margin-top:-16px;">CASES: <b style="color:#67336E;font-size:36px;">`+jd.cases+`</b>
                            &nbsp;&nbsp; DEATHS: <b style="color:#CC0404;font-size:36px;">`+jd.deaths+`</b>
                            &nbsp;&nbsp; RECOVERED: <b style="color:#7252FC;font-size:36px;">`+jd.recovered+`</b>
                            </p>
                            <p style="font-size:18px;margin-top:-15px;text-align:center;">
                            CASES (<b>24 HRS</b>): <b style="color:#005D66;font-size:24px;">`+jd.todayCases+`</b>
                            &nbsp;&nbsp; DEATHS (<b>24 HRS</b>): <b style="color:#FF3B3B;font-size:24px;">`+jd.todayDeaths+`</b>
                            &nbsp;&nbsp; Active Cases: <b style="color:#005D66;font-size:24px;">`+jd.active+`</b>
                            </p>
                            <p style="text-align:center;margin-bottom:10px;">Supported By <b><a href="http://prcs.org.pk/" target="_blank" style="text-decoration: none;color:#EC1C33;font-size:19px;">Pakistan Red Crescent Society</a></b></p>
                        </div>
                    </div>
                    `+preBodyData;
                    }

                    var modalCovid=document.getElementById("covid-modal-19");var span=document.getElementsByClassName("covid-close-btn")[0];span.onclick=function(){modalCovid.style.display="none";}
                    window.onclick=function(event){if(event.target==modalCovid){modalCovid.style.display="none";}}
                    modalCovid.style.display = "block";
                 });
            });
        });
    }
  };