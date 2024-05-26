export default function Header() {
    return (
        <div>
            <div className="flex flex-row justify-center items-start max-w-[1300px] h-[72vh] !mx-auto pt-[50px]">
                <div className="w-fit h-fit flex flex-col justify-start items-center pr-[120px]  pt-[27px]">
                    <div className="w-full">
                        <h1 className="text-[32px]">Zaloguj się</h1>
                    </div>

                    <input type="text" className="!my-4 w-[400px] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-gray-400 rounded-lg" placeholder="Adres e-mail" />
                    <input type="password" className="!mb-2 w-[400px] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-gray-400 rounded-lg" placeholder="Hasło" />
                    <a href="" className="!mb-4 text-[14px] text-blue-700 w-full">Nie pamiętasz hasła?</a>
                    <button className="w-[400px] h-[42px] bg-violet-700 rounded-lg text-white transition hover:bg-violet-600 ">Zaloguj się</button>

                    <div className="!my-[32px] w-[400px] h-6 flex flex-row items-center justify-between">
                        <span className="w-[170px] bg-gray-400 h-[2px]"></span>
                        <span className="text-[14px]">LUB</span>
                        <span className="w-[170px] bg-gray-400 h-[2px]"></span>
                    </div>
                    <button className="w-[400px] h-[42px] border-2 rounded-lg text-black transition hover:bg-gray-100">Zaloguj się przez Google
                        <svg className="!mx-4 w-6 h-6 border-2 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                        </svg>
                    </button>

                </div>
                <div className="w-[1px] h-[65vh] bg-gray-300"></div>
                <div className="w-fit h-fit flex flex-col justify-start items-center pl-[120px]">
                    <div className="w-full">
                        <h3 className="text-[16px]">Nie masz jeszcze konta?</h3>
                        <h1 className="text-[32px]">Utwórz konto</h1>
                    </div>
                    <input type="text" className="!my-4 w-[400px] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-gray-400 rounded-lg" placeholder="Imie" />

                    <input type="text" className="!mb-2 w-[400px] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-gray-400 rounded-lg" placeholder="Nazwisko" />

                    <input type="text" className="!my-2 w-[400px] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-gray-400 rounded-lg" placeholder="Adres e-mail" />

                    <input type="password" className="!my-2 w-[400px] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-gray-400 rounded-lg" placeholder="Hasło" />
                    <div className="flex flex-col items-start w-full !mt-4">
                        <h1 className="text-[16px] font-semibold !mb-2">Zgody formalne</h1>
                        <label className="text-[14px] !mb-2">
                            <input type="checkbox" name="brand" value="Lenovo" />
                            Zaznacz wszystkie
                        </label>
                        <label className="text-[14px] !mb-2">
                            <input type="checkbox" name="brand" value="Lenovo" />
                            Akceptuję <u>regulamin</u> sklepu. *
                        </label>
                        <label className="text-[14px] !mb-2">
                            <input type="checkbox" name="brand" value="Lenovo" />
                            Chcę otrzymywać informacje o aktualnych ofertach<br /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; oraz promocjach w wiadomości e‑mail
                        </label>
                    </div>
                    <button className="!mt-4 w-[400px] h-[42px] bg-violet-700 rounded-lg text-white transition hover:bg-violet-600 ">Utwórz konto</button>

                </div>
            </div>
        </div>
    );
}