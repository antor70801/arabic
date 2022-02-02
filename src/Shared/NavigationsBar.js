import React from 'react';

const NavigationsBar = () => {
    return (
        <div >

            <div class="container-fluid menubar">
                <nav class="navbar navbar-header navbar-expand-lg">


                    <div class="navbar-brand navbar-header">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

                            <div class="mobile-hamburger-menu-container" style={{ display: "flex" }}>
                                <div class="mobile-hamburger-menu-text"
                                    style={{ color: 'white', flex: 1, fontSize: '16px', fontFamily: 'kalpurush' }}>
                                    মেনু নির্বাচন করুন
                                </div>
                                <div class="mobile-hamburger-menu-icon" style={{ marginLeft: '20px' }}>

                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </div>
                            </div>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                    </div>


                    <div class="container">
                        <div id="navbarText" class="collapse navbar-collapse">

                            <ul class="nav abc navbar-nav my-lg-0">
                                <li class=" current_page_item ">
                                    <a class="nav-link active" href="https://iau.edu.bd/">হোম</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://e.iau.edu.bd/">eSIF/eFF</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="/" class="nav-link dropdown-toggle" data-hover="dropdown">পেমেন্ট<b ></b>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item">
                                            <a href="http://iau.edu.bd/payment">মাদরাসা সেবা</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="https://iau.edu.bd/student-service">ছাত্র সেবা</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="https://iau.edu.bd/other-services">অন্যান্য সেবা</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="https://iau.edu.bd/Re-scrutinizing">পুনঃ নিরীক্ষণ</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="https://iau.edu.bd/payment-checking">পেমেন্ট নিশ্চিতকরণ</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-hover="dropdown">সেবাসমূহ<b ></b>
                                    </a>

                                    <ul class="dropdown-menu sub_menu">
                                        <li class="dropdown-item">
                                            <a href="http://center.iau.edu.bd/madrasah-login">মাদরাসার তথ্য ইনপুট সিস্টেম</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="http://center.iau.edu.bd/">ভাইভা/টিউটোরিয়াল মার্ক ইনপুট</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="http://center.iau.edu.bd/">অনুপস্থিত/বহিষ্কৃতদের তালিকা ইনপুট</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="http://exam.iau.edu.bd/">পরীক্ষক</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="https://iau.edu.bd/webmail">Webmail</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://result.iau.edu.bd/">ফলাফল</a>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a href="/" class="dropdown-toggle nav-link" data-hover="dropdown">বিজ্ঞপ্তি
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li id="-7639" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/">সকল বিজ্ঞপ্তি</a>
                                        </li>
                                        <li id="-12404" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/%e0%a6%ae%e0%a7%81%e0%a6%9c%e0%a6%bf%e0%a6%ac-%e0%a6%b6%e0%a6%a4%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7/">মুজিব শতবর্ষ</a>
                                        </li>
                                        <li id="-7638" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/exam-related/">পরীক্ষা সংক্রান্ত</a>
                                        </li>
                                        <li id="-7637" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/administrative/">প্রশাসনিক</a>
                                        </li>
                                        <li id="-7633" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/academic/">একাডেমিক</a>
                                        </li>
                                        <li id="-7657" class="dropdown-item  ">
                                            <a href="https://iau.edu.bd/notice/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf-%e0%a6%ac%e0%a6%bf%e0%a6%9c%e0%a7%8d%e0%a6%9e%e0%a6%aa%e0%a7%8d%e0%a6%a4%e0%a6%bf/">ভর্তি বিজ্ঞপ্তি</a>
                                        </li>
                                        <li id="-7652" class=" dropdown-item "><a href="https://iau.edu.bd/notice/%e0%a6%85%e0%a6%ab%e0%a6%bf%e0%a6%b8-%e0%a6%85%e0%a6%b0%e0%a7%8d%e0%a6%a1%e0%a6%be%e0%a6%b0/">অফিস অর্ডার</a>
                                        </li>
                                        <li id="-13568" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%9c%e0%a7%8d%e0%a6%9e%e0%a6%be%e0%a6%aa%e0%a6%a8/">প্রজ্ঞাপন</a>
                                        </li>
                                        <li id="-12863" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/%e0%a6%b8%e0%a6%82%e0%a6%ac%e0%a6%be%e0%a6%a6-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a7%87%e0%a6%b8-%e0%a6%b0%e0%a6%bf%e0%a6%b2%e0%a6%bf%e0%a6%9c/">সংবাদ / প্রেস রিলিজ</a>
                                        </li>
                                        <li id="-7654" class="dropdown-item  ">
                                            <a href="https://iau.edu.bd/notice/%e0%a6%a6%e0%a6%b0%e0%a6%aa%e0%a6%a4%e0%a7%8d%e0%a6%b0-%e0%a6%ac%e0%a6%bf%e0%a6%9c%e0%a7%8d%e0%a6%9e%e0%a6%aa%e0%a7%8d%e0%a6%a4%e0%a6%bf/">দরপত্র বিজ্ঞপ্তি</a>
                                        </li>
                                        <li id="-7650" class=" dropdown-item ">
                                            <a href="https://iau.edu.bd/notice/noc-passport-visa/">NOC (Passport &/038; VISA)
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li id="-8604" class="  nav-item dropdown">
                                    <a href="/" class="dropdown-toggle nav-link" data-hover="dropdown">চিঠি অনুমোদন</a>
                                    <ul class="dropdown-menu">
                                        <li id="-324" class=" dropdown-item   ">
                                            <a href="https://iau.edu.bd/governing-body/">কমিটির অনুমোদন</a>
                                        </li>
                                        <li id="-8606" class=" dropdown-item   ">
                                            <a href="https://iau.edu.bd/%e0%a6%85%e0%a6%a7%e0%a6%bf%e0%a6%ad%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%e0%a6%bf-%e0%a6%aa%e0%a6%be%e0%a6%a0%e0%a6%a6%e0%a6%be%e0%a6%a8/">অধিভুক্তি নবায়ন</a>
                                        </li>
                                        <li id="-15033" class=" dropdown-item   ">
                                            <a href="https://iau.edu.bd/affiliation/">অধিভুক্তি</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id="-14171" class=" nav-link ">
                                    <a href="https://iau.edu.bd/contact/">যোগাযোগ</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default NavigationsBar;