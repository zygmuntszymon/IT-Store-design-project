import { Link } from 'react-router-dom';

export default function AccountPage() {
    return (
        <div>
            <div className="max-w-[1300px] !mx-auto pt-[50px] flex flex-row items-start justify-center">
                <div className="w-1/4 h-[100vh] border-r-2">
                    <p className="text-lg font-bold">Szymon Zygmunt</p>
                    <p className="text-sm">ID: 0144922</p>
                    <div className='pt-8 pl-6'>
                        <Link>
                            <div className='!mb-3'>
                                <svg class="w-6 h-6 text-gray-80 !mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd" />
                                </svg>
                                <span>Twoje zamówienia</span>
                            </div>
                        </Link>
                        <Link>
                            <div className='!mb-3'>
                                <svg class="w-6 h-6 text-gray-800 !mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
                                </svg>
                                <span>Zwroty i reklamacje</span>
                            </div>
                        </Link>
                        <Link>
                            <div className='!mb-3'>
                                <svg class="w-6 h-6 text-gray-800 !mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd" />
                                </svg>

                                <span>Opinie</span>
                            </div>
                        </Link>
                        <Link>
                            <div className='!mb-3'>
                                <svg class="w-6 h-6 text-violet-700 !mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd" />
                                </svg>

                                <span className='text-violet-700'><b>Ustawienia konta</b></span>
                            </div>
                        </Link>
                        <Link>
                            <div className='!mb-3'>
                                <svg class="w-6 h-6 text-gray-800 !mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                </svg>

                                <span>Sposoby płatności</span>
                            </div>
                        </Link>
                        <Link>
                            <div className='!mb-3'>
                                <svg class="w-6 h-6 text-gray-800 !mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                </svg>
                                <span>Dane do zamówień</span>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className='w-3/5 h-full pl-[80px] flex flex-col'>
                    <p className='text-[32px] !mb-8'>Ustawienia konta</p>
                    <p className=''>Imie</p>
                    <div className='border-[1px] border-gray-400 rounded-lg w-fit px-4 py-1 !mb-6 text-sm'>
                        <input type="text" className="w-[400px] h-[42px] font-thin text-[14px] px-2 bg-white" placeholder="Imie" value={"Szymon"} disabled />
                        <button className='px-2 text-violet-700'>Edytuj</button>
                    </div>

                    <p>Nazwisko</p>
                    <div className='border-[1px] border-gray-400 rounded-lg w-fit px-4 py-1 !mb-6 text-sm'>
                        <input type="text" className="w-[400px] h-[42px] font-thin text-[14px] px-2 bg-white" placeholder="Imie" value={"Zygmunt"} disabled />
                        <button className='px-2 text-violet-700'>Edytuj</button>
                    </div>
                    <p>Adres e-mail</p>
                    <div className='border-[1px] border-gray-400 rounded-lg w-fit px-4 py-1 !mb-6 text-sm'>
                        <input type="text" className="w-[400px] h-[42px] font-thin text-[14px] px-2 bg-white" placeholder="Imie" value={"spzygmunt@student.wsb-nlu.edu.pl"} disabled />
                        <button className='px-2 text-violet-700'>Edytuj</button>
                    </div>

                    <p>Hasło</p>
                    <div className='border-[1px] border-gray-400 rounded-lg w-fit px-4 py-1 !mb-2 text-sm'>
                        <input type="password" className="w-[400px] h-[42px] font-thin text-[14px] px-2 bg-white" value={"************"} disabled />
                        <button className='px-2 text-violet-700'>Edytuj</button>
                    </div>
                    <span className='text-sm text-red-700 !mb-6 '>Zmiana hasła będzie wymagała weryfikacji mailowej!</span>
                    <Link>

                        <div className='!mb-8 underline'>
                            <span>Zaakceptowane zgody</span>
                        </div>
                    </Link>

                    <div className='!mb-12'>
                        <p className='text-[24px] !mb-2'>Wylogowanie ze wszystkich urządzeń</p>
                        <p className='text-sm !mb-4'>Dzięki tej opcji możesz wylogować się z naszej strony i aplikacji na wszystkich przeglądarkach i urządzeniach jednocześnie – również na tym, którego teraz używasz.</p>
                        <button className='border-[1px] px-4 w-[200px] rounded h-8 transition-all hover:bg-gray-100 bg-white text-violet-700'>
                            Wyloguj z urządzeń
                        </button>
                    </div>
                    <div className='!mb-12'>
                        <p className='text-[24px] !mb-2'>Usuwanie konta</p>
                        <p className='text-sm !mb-4'>Jeśli klikniesz w ten przycisk, usuniesz swoje konto w naszym sklepie. Upewnij się, że na pewno chcesz to zrobić – Twojego konta nie będziemy mogli przywrócić.

                            Jeśli chcesz zachować swoje konto, ale nie chcesz dostawać od nas wiadomości – odznacz zgody w ustawieniach powiadomień.</p>
                        <button className='border-[1px] px-4 w-[200px] rounded h-8 transition-all hover:bg-gray-100 bg-white text-violet-700'>
                            Usuń konto
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}