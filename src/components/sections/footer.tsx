"use client";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="
      w-full
      border-t
      border-border
      bg-card/60
      py-8
      mt-20
      backdrop-blur-md
    ">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
        ">
          <p className="
            text-muted-foreground
            text-sm
            font-medium
            order-2 md:order-1
          ">
            &copy; {currentYear}
            <span className="text-foreground ml-1">
              Md Abu Rayhan Rimon
            </span>
          </p>

          <div className="order-1 md:order-2">
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-muted-foreground
                hover:text-primary
                transition-all
                duration-300
                flex items-center gap-2
                group
              "
            >
              Back to top
              <span className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              ">
                &uarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
