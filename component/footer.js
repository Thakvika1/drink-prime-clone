const createFooterComponent = (customPath) => { 

    return `
    <footer class="font-normalidadWide bg-black text-white">
    <div class="pt-[70px] pb-[85px] px-5 des:px-[118px]">
        <div class="font-nunito flex justify-between flex-wrap px-3 pb-7">
            <div class="flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                <h3 class="font-normalidadExteded text-lg text-stroke-2 tracking-[2px] mb-[21px]">ABOUT PRIME</h3>
                <span class="font-normalidad text-wrap w-full leading-5 text-gray-200">  
                    PRIME was developed to fill the void where great taste meets function. With bold, thirst-quenching flavors to help you refresh, replenish, and refuel, PRIME is the perfect boost for any endeavor. We're confident you'll love it as much as we do.
                </span>
                <div class="flex pt-[45px] pb-3 mb-6">
                    <a href="https://www.facebook.com/Prime-Hydration-101364282422983" class="w-10">
                        <svg class="" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Homepage/Nav" stroke="none" stroke-width="1" fill-rule="evenodd" fill="white"> <g id="Homepage-Desktop" transform="translate(-80.000000, -3493.000000)" fill-rule="nonzero"> <g id="Footer" transform="translate(0.000000, 3230.000000)"> <g id="Facebook" transform="translate(80.000000, 263.000000)"> <path d="M14,7.04206901 C13.9996032,10.5072197 11.4951848,13.4576666 8.09392163,14 L8.09392163,9.07775195 L9.72561773,9.07775195 L10.0310095,7.04206901 L8.09171664,7.04206901 L8.09171664,5.72081649 C8.09171664,5.1661345 8.36293099,4.62032741 9.23280141,4.62032741 L10.1147993,4.62032741 L10.1147993,2.88306339 C9.59651159,2.80027655 9.07289572,2.75578306 8.54815055,2.74993971 C6.94952937,2.74993971 5.90215688,3.72507066 5.90215688,5.49006878 L5.90215688,7.04317838 L4.12713613,7.04317838 L4.12713613,9.07775195 L5.90436187,9.07775195 L5.90436187,14 C2.2270805,13.4134658 -0.350395985,10.0330078 0.0388464207,6.3071543 C0.428088827,2.5813008 3.64782071,-0.185951372 7.36593057,0.00976982248 C11.0840404,0.205491017 13.9992417,3.29568589 14,7.04206901 L14,7.04206901 Z" id="Path"></path></g></g></g></g></svg>
                    </a>
                    <a href="https://www.instagram.com/drinkprime/" class="w-10">
                        <svg class="" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-134.000000, -3493.000000)" fill="white" fill-rule="nonzero"> <g transform="translate(0.000000, 3230.000000)"> <g transform="translate(80.000000, 263.000000)"> <g id="instagram" transform="translate(54.000000, 0.000000)"> <path d="M6.99889764,1.26110236 C8.86740157,1.26110236 9.09338583,1.26771654 9.82755906,1.30188976 C10.2714498,1.30699415 10.7111301,1.38866506 11.1272441,1.54330709 C11.4312928,1.65542298 11.7062951,1.83436284 11.9319685,2.06692913 C12.1642736,2.29281739 12.3431724,2.5677566 12.4555906,2.87165354 C12.6098565,3.28783408 12.6911541,3.72751243 12.6959055,4.17133858 C12.7300787,4.9088189 12.7366929,5.1303937 12.7366929,6.99889764 C12.7366929,8.86740157 12.7300787,9.09338583 12.6959055,9.82755906 C12.6912439,10.2712953 12.6103278,10.710927 12.4566929,11.1272441 C12.2214874,11.7346555 11.7412697,12.2148732 11.1338583,12.4500787 C10.7176075,12.6040896 10.2779738,12.6853789 9.83417323,12.6903937 C9.09559055,12.7245669 8.87401575,12.7311811 7.00551181,12.7311811 C5.13700787,12.7311811 4.91102362,12.7245669 4.17795276,12.6903937 C3.73229034,12.688523 3.29032131,12.6094535 2.87165354,12.4566929 C2.5677566,12.3442748 2.29281739,12.165376 2.06692913,11.9330709 C1.83436284,11.7073974 1.65542298,11.4323951 1.54330709,11.1283465 C1.38866506,10.7122325 1.30699415,10.2725521 1.30188976,9.82866142 C1.26771654,9.09007874 1.26110236,8.86850394 1.26110236,7 C1.26110236,5.13149606 1.26771654,4.90551181 1.30188976,4.17244094 C1.30671267,3.72816424 1.38839045,3.28807387 1.54330709,2.87165354 C1.65487831,2.56733188 1.83389261,2.29221516 2.06692913,2.06692913 C2.29221516,1.83389261 2.56733188,1.65487831 2.87165354,1.54330709 C3.28772615,1.3885154 3.72743277,1.30683962 4.17133858,1.30188976 C4.9088189,1.26771654 5.1303937,1.26110236 6.99889764,1.26110236 M6.99889764,0 C5.0984252,0 4.86031496,0.00771653543 4.11291339,0.0418897638 C3.53205486,0.0554121026 2.9576834,0.16723004 2.41417323,0.372598425 C1.94753257,0.549073943 1.52477518,0.824768932 1.17511811,1.18062992 C0.819920983,1.52868906 0.544266488,1.94950404 0.367086614,2.41417323 C0.163600111,2.95801085 0.0536477111,3.53237237 0.0418897638,4.11291339 C0.00771653543,4.86031496 0,5.0984252 0,6.99889764 C0,8.89937008 0.00771653543,9.13858268 0.0418897638,9.88488189 C0.0553060139,10.4657519 0.167127395,11.040141 0.372598425,11.583622 C0.73524826,12.5225398 1.47623664,13.2655287 2.41417323,13.6307087 C2.95801085,13.8341952 3.53237237,13.9441476 4.11291339,13.9559055 C4.86031496,13.9900787 5.0984252,13.9977953 6.99889764,13.9977953 C8.89937008,13.9977953 9.13858268,13.9900787 9.88488189,13.9559055 C10.465434,13.9442536 11.0398132,13.8342978 11.583622,13.6307087 C12.5242618,13.2677582 13.2677582,12.5242618 13.6307087,11.583622 C13.8342978,11.0398132 13.9442536,10.465434 13.9559055,9.88488189 C13.9900787,9.13858268 13.9977953,8.89937008 13.9977953,6.99889764 C13.9977953,5.0984252 13.9900787,4.86031496 13.9559055,4.11291339 C13.9441476,3.53237237 13.8341952,2.95801085 13.6307087,2.41417323 C13.2668161,1.47414672 12.5236486,0.730979135 11.583622,0.367086614 C11.0398132,0.163497501 10.465434,0.053541719 9.88488189,0.0418897638 C9.13858268,0.00771653543 8.89937008,0 6.99889764,0 Z" id="Shape"></path> <path d="M6.99889764,3.40519668 C5.0141515,3.40519668 3.40519685,5.0141515 3.40519685,6.99889764 C3.40519685,8.98364378 5.0141515,10.5925984 6.99889764,10.5925984 C8.98364378,10.5925984 10.5925986,8.98364378 10.5925986,6.99889764 C10.592891,6.04569928 10.2143639,5.13145745 9.54035088,4.4574444 C8.86633782,3.78343134 7.95209599,3.40490432 6.99889764,3.40519668 Z M6.99889764,9.33149606 C5.7106391,9.33149606 4.66629921,8.28715618 4.66629921,6.99889764 C4.66629921,5.7106391 5.7106391,4.66629921 6.99889764,4.66629921 C8.28715618,4.66629921 9.33149606,5.7106391 9.33149606,6.99889764 C9.33149606,7.6175412 9.08574086,8.21084674 8.6482938,8.6482938 C8.21084674,9.08574086 7.6175412,9.33149606 6.99889764,9.33149606 L6.99889764,9.33149606 Z" id="Shape"></path> <circle id="Oval" cx="10.7348031" cy="3.26299213" r="1"></circle></g></g></g></g></g></svg>
                    </a>
                    <a href="https://twitter.com/primehydrate" class="w-10">
                        <svg class=""  width="14px" height="14px" role="presentation" viewBox="0 0 32 26"> <path fill="white" d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path></svg>
                    </a>
                </div>
            </div>

            <div class="font-nunito flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                <div class="mb-3">
                    <a href="${customPath}/energy.html" class="leading-7">ENERGY</a>
                </div>
                <div class="mb-3">
                    <a href="${customPath}/hydration.html" class="leading-7">HYDRATION</a>
                </div>
                <div class="mb-3">
                    <a href="${customPath}/hydration-sticks.html" class="leading-7">HYDRATION+ STICKS</a>
                </div>
            </div>

            <div class="font-nunito flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                <div class="mb-3">
                    <a href="${customPath}/about-prime.html" class="leading-7">ABOUT PRIME</a>
                </div>
                <div class="mb-3">
                    <a href="${customPath}/athlete.html" class="leading-7">TEAM + ATHLETES</a>
                </div>
                <div class="mb-3">
                    <a href="${customPath}/creator.html" class="leading-7">CREATORS</a>
                </div>
                <div class="mb-3">
                    <a href="${customPath}/artist.html" class="leading-7">ARTISTS</a>
                </div>
                <div class="mb-3">
                    <a href="${customPath}/ambassador.html" class="leading-7">AMBASSADORS</a>
                </div>
                <div class="mb-3">
                    <a href="#" class="leading-7">FAQ</a>
                </div>
            </div>

            <div class="flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                <div class="mb-3">
                    <a href="#" class="leading-7">TERM OF USE</a>
                </div>
                <div class="mb-3">
                    <a href="#" class="leading-7">PRIVACY POLICY</a>
                </div>
                <div class="mb-3">
                    <a href="#" class="leading-7">RETURN POLICY</a>
                </div>
                <div class="mb-3"> 
                    <a href="${customPath}/where-to-buy.html" class="leading-7">WHERE TO BUY</a>
                </div>
                <div class="mb-3">
                    <a href="#" class="leading-7">CONTACT US</a>
                </div>
            </div>

            <div class="flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                <h3 class="text-lg font-normalidadExteded text-stroke-2 tracking-[2px] mb-[21px]">NEWSLETTER</h3>
                <span class="font-normalidad">Subscribe to receive updates, access to exclusive deals, and more.</span>
                <div>
                    <div class="h-[45px] bg-white mb-3 rounded-sm border-[2px] pl-8 mt-5">
                        <input type="text" placeholder="Enter your email" class="h-full w-full text-black outline-none border-none overflow-hidden">
                    </div>
                    <div class="h-[45px] bg-white rounded-sm border-[2px] flex items-center justify-between">
                        <div class="h-4 w-4 mx-2">
                            <img src="/assets/index/footer/usa-flag.svg" alt="">
                        </div>
                        <input type="text" placeholder="Phone Number" class="h-full w-full text-black outline-none border-none overflow-hidden ml-2">
                    </div>
                </div>
                <div class="py-3">
                    <span class="text-wrap w-full font-arial text-[11px] text-gray-200 leading-5">
                        By subscribing, you consent to receive marketing communications from PRIME using the provided email address and phone number. Consent to receive marketing is not required for purchase. Standard data and messaging rates may apply. You can opt-out at any time by contacting us or using the unsubscribe link. See our Privacy Policy for details.
                    </span>
                </div>
                <div class="pt-5">
                    <button class="font-normalidadExteded text-stroke-1 tracking-wides text-[14px] p-3 border-white border-[1px] w-[167px] h-[52px]">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
        <div class="pt-6 pb-3 text-center tab:text-left px-9">
            <p class="text-[14px]">
                © Prime Hydration LLC
            </p>
        </div>
    </div>
</footer>
    `
}



class footerComponent extends HTMLElement { 
    
    connectedCallback() { 
        const customPath = this.getAttribute('customPath') || '.';
        this.innerHTML = createFooterComponent(customPath);
    }
};

customElements.define('prime-footer', footerComponent)