 import useUserInfo from "../../Hooks/useUserInfo";

const myContribution = () => {

   const {userInfo} = useUserInfo()

    return (
        <div className="pt-20 px-20">

        <div className="bg-white  border-2 shadow-lg rounded-lg p-4 mb-4 flex">
            <div className="flex-shrink-0">
                <img src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/" alt="Map 1" className="h-full w-48 object-cover rounded"/>
            </div>
            <div className="ml-4 flex flex-col justify-between">
                <div className="flex items-center mb-2">
                    <div className="bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-3 h-3 text-white">
                            <path  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold">Counter Strike Server 1</h2>
                </div>
                <div className="flex justify-between">
                    <div className="mr-4">
                        <p>IP: 123.456.789.1:27015</p>
                        <p>Регион: Europe</p>
                        <p>Пинг: 30 ms</p>
                    </div>
                    <div>
                        <p>Мод: Zombie Mod</p>
                        <p>Карта: cs_italy</p>
                        <p>Игроки: 24/32</p>
                    </div>
                   
                </div>
                <div className="">
                        <button className="btn btn-primary">YOU</button>
                    </div>
            </div>
        </div>

        </div>
    );
};

export default myContribution;