import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => (
  <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
    <header className="bg-black px-20 font-sans">
      <div className="container py-4 text-gray-500 flex items-center justify-between">
        <AniLink cover bg="#FF725C" className="text-white" to="/">
          <svg className="fill-current h-8" viewBox="0 0 125 32">
            <path d="M52.1762 24.2549L45.6248 8.83558H47.7643L52.1762 19.5217L56.5801 8.83558H58.7263L52.1762 24.2549ZM80.0379 13.714C78.3518 13.7175 76.7358 14.3915 75.5435 15.5884C74.3513 16.7854 73.68 18.4077 73.6764 20.1004C73.6721 21.3339 74.0286 22.5416 74.7017 23.5736L76.3366 22.5069C75.8046 21.6801 75.5621 20.6989 75.6476 19.7183C75.7331 18.7378 76.1416 17.8137 76.8086 17.0923C77.4756 16.3708 78.3631 15.893 79.3308 15.7344C80.2985 15.5759 81.2912 15.7455 82.1521 16.2166C83.013 16.6876 83.6931 17.4332 84.0847 18.3356C84.4764 19.238 84.5574 20.2457 84.3149 21.1994C84.0724 22.1532 83.5203 22.9986 82.7458 23.6022C81.9712 24.2057 81.0184 24.533 80.0379 24.5322V26.4921C81.7251 26.4921 83.3432 25.8192 84.5362 24.6216C85.7292 23.4239 86.3994 21.7995 86.3994 20.1057C86.3994 18.412 85.7292 16.7876 84.5362 15.5899C83.3432 14.3922 81.7251 13.7194 80.0379 13.7194V13.714ZM27.2468 20.1004C27.2468 16.6246 30.1686 13.6874 33.6349 13.6874C37.1012 13.6874 40.0216 16.6206 40.0216 20.1004C40.0216 23.5802 37.0998 26.5121 33.6349 26.5121C30.1699 26.5121 27.2468 23.5762 27.2468 20.1004ZM29.2217 20.1004C29.2217 22.4789 31.2656 24.5309 33.6349 24.5309C35.9577 24.5309 38.0481 22.4789 38.0481 20.1004C38.0481 17.6738 35.9577 15.6686 33.6349 15.6686C31.2656 15.6686 29.2217 17.6738 29.2217 20.1004ZM100.091 26.5321C101.339 26.531 102.535 26.0329 103.418 25.147C104.301 24.2612 104.797 23.06 104.799 21.807V8.57026H102.848V21.807C102.832 22.5304 102.534 23.2188 102.019 23.7248C101.504 24.2308 100.812 24.5141 100.091 24.5141C99.3705 24.5141 98.6784 24.2308 98.1632 23.7248C97.648 23.2188 97.3506 22.5304 97.3348 21.807V8.57026H95.3839V21.807C95.3853 23.0597 95.8816 24.2608 96.764 25.1466C97.6464 26.0324 98.8427 26.5307 100.091 26.5321ZM110.244 21.7963C110.247 24.1787 109.418 26.4868 107.902 28.3195C106.386 30.1523 104.278 31.394 101.945 31.8288C99.6115 32.2636 97.2003 31.8641 95.13 30.6997C93.0597 29.5352 91.4611 27.6795 90.6121 25.4548C89.6783 27.32 88.2713 28.9051 86.5329 30.0506C84.7946 31.1961 82.7862 31.8614 80.7101 31.9796C78.6341 32.0977 76.5637 31.6645 74.7075 30.7236C72.8513 29.7827 71.2749 28.3674 70.1371 26.6201V31.3652H68.1862V8.83292H70.1371V13.578C71.5339 11.4346 73.5829 9.80134 75.979 8.92145C78.3752 8.04155 80.9903 7.96205 83.4351 8.6948C85.8798 9.42755 88.0235 10.9334 89.5469 12.988C91.0704 15.0427 91.8921 17.5363 91.8897 20.0977V21.8043C91.9171 23.9699 92.7933 26.0374 94.3284 27.559C95.8635 29.0806 97.934 29.9338 100.091 29.9338C102.249 29.9338 104.319 29.0806 105.854 27.559C107.389 26.0374 108.265 23.9699 108.293 21.8043V15.3726C108.322 12.9887 109.197 11.4128 110.719 10.1075C112.405 8.66226 114.703 8.18628 116.782 8.18628C119.461 8.18628 122.073 9.2009 123.741 10.9555L123.004 12.6101C121.307 11.0419 119.091 10.1628 116.785 10.1435C112.962 10.1435 110.242 12.0821 110.242 15.3633V15.3726V15.4366C110.319 21.6097 120.014 20.8177 120.014 24.7602C120.014 26.2268 118.652 27.4987 116.22 27.4987C114.463 27.4987 112.674 26.8854 111.203 25.8988C111.43 25.2765 111.604 24.636 111.725 23.9842C113.199 25.0148 114.709 25.5975 116.332 25.5975C117.475 25.5975 118.058 25.3001 118.058 24.7535C118.058 24.4055 117.729 24.0389 115.39 23.1002C113.371 22.291 111.539 21.359 110.236 20.0857L110.244 21.7963ZM89.9387 20.1004C89.939 18.1345 89.3586 16.2126 88.2708 14.5779C87.183 12.9432 85.6368 11.669 83.8277 10.9165C82.0186 10.164 80.0278 9.96698 78.1072 10.3503C76.1865 10.7337 74.4223 11.6803 73.0375 13.0703C71.6527 14.4603 70.7096 16.2313 70.3274 18.1595C69.9453 20.0876 70.1413 22.0862 70.8906 23.9024C71.64 25.7187 72.909 27.2712 74.5372 28.3634C76.1654 29.4556 78.0797 30.0386 80.0379 30.0386C82.6627 30.0358 85.1792 28.9878 87.0353 27.1247C88.8914 25.2616 89.9356 22.7354 89.9387 20.1004ZM115.459 15.2766C115.459 14.9193 115.916 14.6233 116.846 14.6233C117.301 14.625 117.755 14.6841 118.196 14.7993C119.341 15.0862 120.41 15.6198 121.329 16.3632L122.073 14.698C120.795 13.6314 118.56 12.6621 116.658 12.6621C114.556 12.6621 113.513 14.05 113.513 15.3593C113.513 19.3111 123.045 18.2018 123.045 24.5042C123.045 27.9454 120.134 29.9706 116.038 29.9706C113.929 29.9541 111.879 29.2649 110.185 28.0027C109.837 28.5681 109.442 29.1032 109.005 29.6026C110.954 31.0572 113.653 31.9238 116.043 31.9238C121.196 31.9238 125 29.104 125 24.4095C124.991 17.4658 115.459 16.9725 115.459 15.2766ZM62.6016 31.3652H64.5539V13.5727L62.6016 17.9818V31.3652ZM53.4936 29.4053H50.8627L44.6208 15.4459C42.3843 10.4395 37.8994 8.20095 33.6973 8.20095C32.1856 8.19512 30.6874 8.48589 29.2868 9.05691V0H27.3398V12.4914C29.1223 10.9804 31.3816 10.1544 33.7146 10.1609C39.4134 10.1609 43.6154 14.8273 43.6154 20.1004C43.6122 22.7354 42.5681 25.2616 40.7119 27.1247C38.8558 28.9878 36.3393 30.0358 33.7146 30.0386C31.3931 30.0386 29.3173 29.2466 27.871 28.0227L26.7209 29.5839C28.713 31.1839 31.0478 31.9985 33.7026 31.9985C36.5079 32.0001 39.2229 31.0035 41.3655 29.1858C43.508 27.368 44.9395 24.8467 45.4057 22.0696L49.5572 31.3652H54.7938L64.765 8.83292H62.6826L53.4936 29.4053ZM5.48762 20.1004C5.48762 18.8373 5.86071 17.6025 6.55972 16.5523C7.25873 15.5021 8.25226 14.6835 9.41467 14.2002C10.5771 13.7168 11.8562 13.5903 13.0902 13.8367C14.3242 14.0832 15.4577 14.6914 16.3474 15.5845C17.237 16.4777 17.8429 17.6156 18.0884 18.8545C18.3338 20.0933 18.2078 21.3774 17.7264 22.5443C17.2449 23.7113 16.4295 24.7087 15.3834 25.4105C14.3372 26.1122 13.1073 26.4868 11.8491 26.4868C10.163 26.4832 8.54698 25.8093 7.35473 24.6123C6.16248 23.4154 5.49113 21.7931 5.48762 20.1004ZM7.43856 20.1004C7.43856 20.9761 7.69724 21.8322 8.18188 22.5603C8.66651 23.2885 9.35534 23.856 10.1613 24.1911C10.9672 24.5263 11.854 24.614 12.7096 24.4431C13.5651 24.2723 14.351 23.8505 14.9678 23.2313C15.5847 22.6121 16.0047 21.8231 16.1749 20.9642C16.3451 20.1053 16.2577 19.215 15.9239 18.4059C15.5901 17.5969 15.0248 16.9053 14.2995 16.4188C13.5742 15.9323 12.7214 15.6726 11.8491 15.6726C11.2696 15.6722 10.6957 15.7865 10.1602 16.0089C9.62476 16.2312 9.13814 16.5573 8.7282 16.9684C8.31825 17.3796 7.99301 17.8678 7.77105 18.4052C7.54909 18.9426 7.43475 19.5186 7.43458 20.1004H7.43856ZM21.7499 13.5674C20.672 11.9196 19.2027 10.5669 17.4743 9.63125C15.7459 8.69559 13.8128 8.20636 11.8491 8.20761V10.1609C14.4734 10.1637 16.9895 11.2112 18.8455 13.0738C20.7016 14.9363 21.7461 17.4618 21.7499 20.0964C21.7516 21.7013 21.3662 23.2828 20.6266 24.7056C19.8869 26.1284 18.8151 27.3503 17.5027 28.2667C16.1902 29.1832 14.6763 29.7669 13.0902 29.9681C11.5042 30.1693 9.89316 29.9819 8.39493 29.422C6.89671 28.8621 5.55582 27.9463 4.4869 26.7529C3.41798 25.5594 2.65282 24.1239 2.25683 22.569C1.86084 21.0141 1.8458 19.386 2.213 17.824C2.58019 16.262 3.3187 14.8125 4.36539 13.5994L2.88591 12.3208C1.63507 13.7732 0.752974 15.508 0.314966 17.377C-0.123043 19.2459 -0.103952 21.1936 0.370609 23.0535C0.84517 24.9135 1.7611 26.6305 3.04017 28.058C4.31925 29.4854 5.92346 30.5808 7.71581 31.2507C9.50815 31.9206 11.4354 32.1451 13.3329 31.9049C15.2304 31.6647 17.0418 30.967 18.6124 29.8714C20.183 28.7759 21.4662 27.3149 22.3523 25.6134C23.2384 23.9119 23.7011 22.0204 23.7009 20.1004V0H21.7499V13.5674Z" />
          </svg>
        </AniLink>
        <ul className="flex w-2/3 justify-between font-medium text-base text-world">
          <AniLink cover bg="#FF725C" to="/clients">
            <li className="text-white">Clients</li>
          </AniLink>
          <a href="">
            <li>Publications</li>
          </a>
          <a href="">
            <li>Playbook</li>
          </a>
          <a href="">
            <li>Company</li>
          </a>
          <AniLink cover bg="#FF725C" to="/contact">
            <li>Contact</li>
          </AniLink>
        </ul>
      </div>
    </header>
    <main className="container px-20">
      <h1 className="text-4xl py-10 text-gray-200 leading-tight font-semibold font-sans">
        A blurb about our clients and we transform ideas into household names.
      </h1>
      <div className="flex text-gray-400 flex-wrap justify-between">
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">
            Quintype
          </h2>
          <p className="py-2 font-serif">
            Reengineering India’s leading news org’s web-publishing platform to
            work 2x faster
          </p>
          <a className="text-xs text-bittersweet font-sans" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">Dunzo</h2>
          <p className="py-2 font-serif">
            Streamlining engineering to create product scalability for Dunzo’s
            hyperlocal market
          </p>
          <a className="text-xs text-bittersweet font-sans" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">Gojek</h2>
          <p className="py-2 font-serif">
            Redesigning the driver partner app for Indonesia’s most loved
            ride-sharing aggregator
          </p>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">Loco</h2>
          <p className="py-2 font-serif">
            Redesigning Pocket Aces’ game app with 10M+ downloads that lets you
            win real money
          </p>
          <a className="text-xs text-bittersweet font-sans" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">
            2Gud / Flipkart
          </h2>
          <p className="py-2 font-serif">
            Contributing ~$1B in revenue by product vision for Flipkart’s pivot
            into refurbished products market
          </p>
        </div>
      </div>
      <div className="container py-2 text-gray-500 flex flex-wrap items-start justify-between font-sans">
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Payments
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Slicepay</li>
            <li className="font-semibold text-xs py-1">Zoto</li>
            <li className="font-semibold text-xs py-1">Fisdom</li>
            <li className="font-semibold text-xs py-1">Citruspay</li>
            <li className="font-semibold text-xs py-1">Payzippy</li>
            <li className="font-semibold text-xs py-1">Paisool</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Logistics
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Dunzo</li>
            <li className="font-semibold text-xs py-1">Swiggy</li>
            <li className="font-semibold text-xs py-1">Zomato</li>
            <li className="font-semibold text-xs py-1">Gojek</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Not-For-Profit
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">
              Resolve to Save Lives
            </li>
            <li className="font-semibold text-xs py-1">Pratham Books</li>
            <li className="font-semibold text-xs py-1">YourStory</li>
            <li className="font-semibold text-xs py-1">Ashoka Foundation</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Education
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Gradeup</li>
            <li className="font-semibold text-xs py-1">IMAX</li>
            <li className="font-semibold text-xs py-1">Loco</li>
            <li className="font-semibold text-xs py-1">Wikipedia</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Ecommerce
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Flipkart</li>
            <li className="font-semibold text-xs py-1">2Gud</li>
            <li className="font-semibold text-xs py-1">Flyte</li>
            <li className="font-semibold text-xs py-1">OLX</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
)
