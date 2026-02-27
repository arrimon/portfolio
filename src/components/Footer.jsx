import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        w-full
        border-t
        border-[var(--border)]
        bg-[var(--surface)]/60
        py-8
        mt-20
        backdrop-blur-md
      "
    >
      <div className="max-w-[1440px] mx-auto px-6">

        <div className="
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
        ">

          {/* Copyright */}
          <p className="
            text-[var(--text-muted)]
            text-sm
            font-medium
            order-2 md:order-1
          ">
            © {currentYear}
            <span className="text-[var(--text-primary)] ml-1">
              Md Abu Rayhan Rimon
            </span>
          </p>

          {/* Back To Top */}
          <div className="order-1 md:order-2">
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
              }
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[var(--text-muted)]
                hover:text-[var(--accent)]
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
                ↑
              </span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;