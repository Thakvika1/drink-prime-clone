class subPageCard extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const productImgUrl = this.getAttribute('product-img-url');
        const productTitle = this.getAttribute('product-title');
        const productSize = this.getAttribute('product-size');
        const productPrice = this.getAttribute('product-price');
        const buttonBgColor = this.getAttribute('button-bg-color') || 'bg-black'; 
        const buttonTitle = this.getAttribute('button-title') || 'ADD TO CART';

        this.setAttribute('class', 'flex flex-col items-centershrink basis-1/2 tab:basis-1/3 px-[34px] pb-[65px]');
        
        // Determine text color based on background color
        let buttonTextColor, hoverBgColor, hoverTextColor;

        if (buttonBgColor === 'bg-black') {
            buttonTextColor = 'text-white';
            hoverBgColor = 'hover:bg-white';
            hoverTextColor = 'hover:text-black';
        } else {
            buttonTextColor = 'text-black';
            hoverBgColor = 'hover:bg-black';
            hoverTextColor = 'hover:text-white';
        }
        
        this.innerHTML = `
            <div>
                <img src="${productImgUrl}" alt="">
            </div>
            <div class="w-full flex-grow flex flex-col items-center text-center justify-between text-soft-gray1 font-normalidadExteded text-stroke-0.2">
                <div class="flex px-3 justify-start items-center flex-col pt-[10px] w-full uppercase font-normalidadExteded">
                    <h3 class="pt-[8px] w-full text-wrap font-bold max-[480px]:text-[12px] text-[14px]">${productTitle}</h3>
                    <p class="pt-[5px] w-full max-[480px]:text-[9px] text-[14px]">${productSize}<span> / </span>${productPrice}</p>
                </div>
                <div class="flex justify-end pb-[14px] mt-[7px] text-nowrap cursor-pointer">
                    <div class="border transition-all duration-300 ease-in-out border-solid border-black font-bold px-[14px] tracking-wider max-[480px]:text-[9px] text-[11px] text-stroke-0.2 py-[8px] font-normalidadExteded add-to-cart ${buttonBgColor} ${buttonTextColor} ${hoverBgColor} ${hoverTextColor}">
                        ${buttonTitle}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('subpage-card', subPageCard);
