function showValentine() {

    document.body.classList.add('card-mode');
    document.body.innerHTML = `
    
    <div class="relative w-full max-w-[480px] aspect-[16/11] group perspective mx-auto">
    
    <div class="absolute inset-x-0 mx-auto w-[92%] h-[95%] card-paper p-8
                transition-all duration-700 ease-in-out z-0
                group-hover:-translate-y-52 group-hover:z-50">
        
        <div class="h-full border border-rose-100 p-5 flex flex-col justify-between relative">
            
            <div class="flex justify-between items-start">
                <div class="space-y-2">
                    <h2 class="handwritten text-3xl card-accent">Dear Nuzulin,</h2>
                    <p class="text-sm italic text-rose-700/80 max-w-[220px] leading-relaxed">
                        "happy day of affection, sayanggg, akuu mauuu seterusnya merayakan tanggal 15 februari ini bersama kamuu"
                    </p>
                </div>
                <div class="w-14 h-20 border border-dotted border-rose-200 bg-rose-50 flex flex-col items-center justify-center p-1">
                     <div class="text-[8px] uppercase tracking-widest text-rose-300">Post</div>
                     <div class="w-full h-full bg-center bg-cover" style="background-image: url('images/photo.jpg')"></div>
                </div>
            </div>

            <div class="text-center">
                <p class="text-xl font-bold card-accent italic uppercase tracking-[0.15em]">
                    STAY WITH ME YAA
                </p>
            </div>

            <div class="border-t border-rose-100 pt-3 relative">

            <div class="absolute left-0 bottom14 text-[8px] text-rose-700/70 uppercase tracking-widest italic leading-tight max-w-[140px]">
        my heart quietly chooses you
            </div>

            <div class="absolute right-0 bottom1 text-right">
                <p class="text-[10px] text-rose-400 uppercase tracking-widest">Always,</p>
                <p class="handwritten text-2xl card-accent">Your Admirer</p>
            </div>

            </div>
        </div>
    </div>

    <div class="absolute inset-0 bg-white border border-rose-200 shadow-xl z-100 overflow-hidden">
        <div class="absolute inset-0 z-20" style="background: linear-gradient(35deg, #ffffff 50%, #f9f4f6 50.1%);"></div>
        
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            <div class="w-14 h-14 bg-[#c27a93] rounded-full shadow-lg border border-[#a8647f] flex items-center justify-center">
                <span class="text-[#fff0f5] text-lg">❤</span>
            </div>
        </div>

        <div class="absolute bottom-8 w-full text-center z-40">
            <p class="text-[#8a4b61] font-bold uppercase tracking-[0.4em] text-[11px]">YOU AND I</p>
        </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-1/2 bg-[#ecd3db] origin-top transition-transform duration-500 ease-in-out
                group-hover:[transform:rotateX(180deg)] z-30 shadow-sm"
         style="clip-path: polygon(0 0, 50% 100%, 100% 0);">
    </div>

</div>

<div class="absolute bottom-2 left-1/2 -translate-x-1/2 text-rose-500 text-[10px] uppercase tracking-[0.4em] animate-pulse text-center">
Tap to Open
</div>
    
    <a id="nextBtn"
   href="flower.html"
   class="opacity-0 pointer-events-none transition-all duration-700
          fixed bottom-10 left-1/2 -translate-x-1/2
          bg-[#c27a93] text-white px-6 py-3 rounded-full
          shadow-lg tracking-widest text-sm">
   NEXT
</a>
    `;
    
    setTimeout(() => {
    const btn = document.getElementById("nextBtn");
    btn.classList.remove("opacity-0","pointer-events-none");
    btn.classList.add("opacity-100");
}, 900);
}