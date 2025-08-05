export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-4 px-2 bg-gray-200 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 border-t border-gray-300">
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-center text-gray-800">
        LEGO4DOLLAZ
      </p>
      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center text-gray-800">
        ©{year} Project is created by <span className="font-semibold">Jackychan0201</span>
      </p>
    </footer>
  )
};