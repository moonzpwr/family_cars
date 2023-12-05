import React, { useEffect, useState } from 'react';
import { ArrRightBlue, Hammer, Refueling, Gear, Calendar, Bill, Transport } from '@/components/icons';

import s from './FourthStep.module.css';


  
const FourthStep = ({ increment, decrement, data = {} }) => {
    //variables for calculation
    const [usdRate, setUsdRate] = useState(1)
    const [eurRate, setEurRate] = useState(1)
    const { motorVolume, fuel, year, destinationPort, landPrice, seaPrice, countryState } = data.options
    const [carPrice, setCarPrise] = useState(data.actualCost)
    const [auctionCommission, setAuctionCommision] = useState(0)
    const [kw, setKw] = useState(0)
    const taxBase = Number(carPrice) + Number(auctionCommission) + 1000 
    const now = new Date
    const ageRatio = () => {
        const result = Number(now.getFullYear()) - Number(productionYear) - 1
        if (result < 15) {
            return result
        } else {
            return 15
        }
    }
    const exciseFee = (param) => {
        switch (param) {
            case "Diesel":
                return Number(motorCapacity) <= 3.5 ? Number(motorCapacity) * (75 * eurRate / usdRate) * ageRatio() : Number(motorCapacity) * (150 * eurRate / usdRate) * ageRatio();
            case "Hybrid": 
                return Number(motorCapacity) <= 3 ? Math.round(Number(motorCapacity) * (50 * eurRate / usdRate) * ageRatio()) : Math.round(Number(motorCapacity) * (100 * eurRate / usdRate) * ageRatio());
            case "Compressed natural gas":
                return Number(motorCapacity) <= 3 ? Math.round(Number(motorCapacity) * (50 * eurRate / usdRate) * ageRatio()) : Math.round(Number(motorCapacity) * (100 * eurRate / usdRate) * ageRatio());
            case "Flexible Fuel":
                return Number(motorCapacity) <= 3 ? Math.round(Number(motorCapacity) * (50 * eurRate / usdRate) * ageRatio()) : Math.round(Number(motorCapacity) * (100 * eurRate / usdRate) * ageRatio());
            case "Gasoline":
                return Number(motorCapacity) <= 3 ? Math.round(Number(motorCapacity) * (50 * eurRate / usdRate) * ageRatio()) : Math.round(Number(motorCapacity) * (100 * eurRate / usdRate) * ageRatio());
            case "Electric":
                return motorCapacity > 0 ? Math.round(Number(motorCapacity) * (1 * eurRate / usdRate)) : 50;
            case "Hydrogen fuel cell":
                return 0;
            case "Other":
                return "Укажите тип топлива"
            case "Unknown":
                return "Укажите тип топлива и объем двигателя"
        }       
    }

    // variables for html
    const [seaDelivery, setSeaDevilery] = useState(0)
    const [landDelivery, setLandDelivery] = useState(0)
    const [ourService, setOurService] = useState(500)
    const [repairPrice, setRepairPrice] = useState(1000)
    const [auctionName, setAuctionName] = useState(() => { return data.uri.includes('copart') ? "Copart" : "IAAI" })
    const [motorCapacity, setMotorCapacity] = useState("")
    const [productionYear, setProdactionYear] = useState(0)
    const [fuelType, setFuelType] = useState(0)
    const auctionFullPrice = Number(carPrice) + Number(auctionCommission)
    const deliveryFullPrice = Number(ourService) + Number(seaDelivery) + Number(landDelivery)
    const duty = Math.round(taxBase * 0.1)
    const vat = fuelType === "Other" || fuelType === "Unknown" ? "Укажите тип топлива" : Math.round((taxBase + duty + exciseFee(fuelType)) * 0.2);
    const customsFullPrice = Math.round(fuel === "Electric" ? exciseFee(fuelType) : duty +  exciseFee(fuelType) + vat)


    function auctionCommissionCalculation(param) {
    if (param <= 99.99) {
        setAuctionCommision(45 + 59)
    } else if (param <= 199.99) {
        setAuctionCommision(80 +39 + 59)
    } else if (param <= 399.99) {
        setAuctionCommision(120 + 39 + 59)
    } else if (param <= 499.99) {
        setAuctionCommision(160 + 49 + 59)
    } else if (param <= 599.99) {
        setAuctionCommision(185 + 49 + 59)
    } else if (param <= 699.99) {
        setAuctionCommision(210 + 49 + 59)
    } else if (param <= 799.99) {
        setAuctionCommision(230 + 49 + 59)
    } else if (param <= 899.99) {
        setAuctionCommision(250 + 49 + 59)
    } else if (param <= 999.99) {
        setAuctionCommision(275 + 49 + 59)
    } else if (param <= 1199.99) {
        setAuctionCommision(325 + 69 + 59)
    } else if (param <= 1299.99) {
        setAuctionCommision(350 + 69 + 59)
    } else if (param <= 1399.99) {
        setAuctionCommision(365 + 69 + 59)
    } else if (param <= 1499.99) {
        setAuctionCommision(380 + 69 + 59)
    } else if (param <= 1599.99) {
        setAuctionCommision(390 + 79 + 59)
    } else if (param <= 1699.99) {
        setAuctionCommision(410 + 79 + 59)
    } else if (param <= 1799.99) {
        setAuctionCommision(420 + 79 + 59)
    } else if (param <= 1999.99) {
        setAuctionCommision(440 + 79 + 59)
    } else if (param <= 2399.99) {
        setAuctionCommision(470 + 89 + 59)
    } else if (param <= 2499.99) {
        setAuctionCommision(480 + 89 + 59)
    } else if (param <= 2999.99) {
        setAuctionCommision(500 + 89 + 59)
    } else if (param <= 3499.99) {
        setAuctionCommision(600)
    } else if (param <= 3999.99) {
        setAuctionCommision(650 + 89 + 59)
    } else if (param <= 4499.99) {
        setAuctionCommision(675 + 99 + 59)
    } else if (param <= 4999.99) {
        setAuctionCommision(700 + 99 + 59)
    } else if (param <= 5999.99) {
        setAuctionCommision(725 + 99 + 59)
    } else if (param <= 7499.99) {
        setAuctionCommision(750 + 119 + 59)
    } else if (param <= 7999.99) {
        setAuctionCommision(775 + 119 + 59)
    } else if (param <= 9999.99) {
        setAuctionCommision(775 + 129 + 59)
    } else if (param <= 14999.99) {
        setAuctionCommision(800 + 129 + 59)
    } else if (param >= 15000) {
        setAuctionCommision(Math.round((Number(param) * 0.07) + 129 + 59))
    }
    }

    const handleOnPriceChange = (e) => {
        setCarPrise(e.target.value)
        auctionCommissionCalculation(e.target.value)
    }

    const handleMotorCapacityChange = (e) => {
        if (isNaN(e.target.value)) {
            return
        }
        setMotorCapacity(e.target.value)
    }

    const handleChangeProdactionYear = (e) => {
        setProdactionYear(e.target.value)
    }
    const handleFuelTypeChange = (e) => {
        setFuelType(e.target.value)
    }

    const getExchangeData = async () => {
        try {
            const response = await fetch(`/api/exchange`);
            if (!response) {
                throw new Error(`Error: ${response.status}`);
            }
            const responseToJSON = await response.json();
            setUsdRate(responseToJSON[0].rate)
            setEurRate(responseToJSON[1].rate)
            console.log('responseToJSON', responseToJSON[0].rate);
        }
        catch (e) {
            console.error(e);
        }
    };


    useEffect(() => {
        getExchangeData();
        auctionCommissionCalculation(data.actualCost);
        setProdactionYear(year);
        setFuelType(fuel);
        setMotorCapacity(motorVolume);
        setLandDelivery(landPrice)
        setSeaDevilery(seaPrice)
    }, [])
    
    useEffect(()=>(console.log(data)), [])
    
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>Калькулятор "под ключ"</h2>
            <p className={s.desc}>
                Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны консультация с широким активом в значительной степени обуславливает создание форм развития. Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям.
            </p>
            <form className={s.propertiesForm}>
                <ul className={s.formList}>
                    <li className={s.formItem}>
                        <label className={s.formLabel}><Hammer /><span className={s.labelTitle}>Аукцион</span>
                            <input value={auctionName} disabled /> 
                        </label>
                    </li>
                    <li className={s.formItem}>
                        <label className={s.formLabel}><Transport /><span className={s.labelTitle}>Транспортировка по суше</span>
                             <input value={`${countryState} - ${destinationPort}`} disabled/>
                            {/* <select>
                                <option>{countryState} &#8594; {destinationPort}</option>
                            </select> */}
                        </label>
                    </li>
                    <li className={s.formItem}>
                        <label className={s.formLabel}><Calendar/><span className={s.labelTitle}>Год производства</span>
                            <input value={productionYear} onChange={handleChangeProdactionYear}/>
                        </label>
                    </li>
                    <li className={s.formItem}>
                        <label className={s.formLabel}><Refueling /><span className={s.labelTitle}>Тип топлива</span>
                            {fuel === 'Other' || fuel === "Unknown" ? 
                                <select onChange={handleFuelTypeChange}>
                                    <option defaultValue>Выбрать...</option>
                                    <option>Gasoline</option>
                                    <option>Diesel</option>
                                    <option>Electric</option>
                                    <option>Compressed natural gas</option>
                                    <option>Hybrid</option>
                                    <option>Flexible Fuel</option>
                                    <option>Hydrogen fuel cell</option>
                                </select> :
                                <input value={fuelType} disabled/>
                            }  
                        </label>
                    </li>
                    <li className={s.formItem}>
                        <label className={s.formLabel}><Gear /><span className={s.labelTitle}>Двигатель</span>
                            {fuel === "Electric" || fuel === "Unknown" ?
                                <input value={motorCapacity} onChange={handleMotorCapacityChange} /> :
                                <input value={motorVolume} disabled />
                            }
                            {fuel === "Electric" || fuel ==="Other" || fuel === "Unknown" && <span className={s.kw}>{fuelType === "Electric" ? "укажите количество кВт" : "укажите объем двигателя"}</span>}
                        </label>
                        
                    </li>
                    <li className={s.formItem}>
                        <label className={s.formLabel}><Bill/><span className={s.labelTitle}>Предполагаемая цена лота</span>
                            <span className={s.inputWrapper}><input type='text' value={carPrice} onChange={handleOnPriceChange}/></span>
                        </label>
                    </li>
                </ul>
                <button onClick={increment} className={s.goForwarrdBtn}>рассчитать <ArrRightBlue /></button>
            </form>
            <div className={s.pricesContainer}>
                <ul className={s.pricesLists}>
                    <li className={s.pricesTittleItem}>Аукцион<span>$ {auctionFullPrice}</span></li>
                    <li className={s.pricesItem}>Стоимость транспортного средства:<span>$ {carPrice}</span></li>
                    <li className={s.pricesItem}>Коммисия аукциона Copart:<span>$ {auctionCommission}</span></li>
                </ul>
                <ul className={s.pricesLists}>
                    <li className={s.pricesTittleItem}>Доставка<span>$ {deliveryFullPrice}</span></li>
                    <li className={s.pricesItem}>Транспортировка по суше, {countryState} &#8594; {destinationPort}:<span>$ {landDelivery}</span></li>
                    <li className={s.pricesItem}>Морская доставка, {destinationPort} &#8594; Odessa (UA):<span>$ {seaDelivery}</span></li>
                    <li className={s.pricesItem}>Наши услуги и оформление документов:<span>$ {ourService}</span></li>
                </ul>
                <ul className={s.pricesLists}>
                    <li className={s.pricesTittleItem}>Расход по прибытию в страну назначения:<span>$ 1050</span></li>
                    <li className={s.pricesItem}>Сертификация:<span>$ 250</span></li>
                    <li className={s.pricesItem}>Таможенный брокер:<span>$ 300</span></li>
                    <li className={s.pricesItem}>Экспедирование:<span>$ 300</span></li>
                    <li className={s.pricesItem}>Доставка к заказчику:<span>$ 200</span></li>
                </ul>
                <ul className={s.pricesLists}>
                    <li className={s.pricesTittleItem}>Растаможка:<span>$ {isNaN(customsFullPrice) ? "-" : customsFullPrice + 155}</span></li>
                    <li className={s.pricesItem}>Пошлина:<span>$ {fuel === "Electric" ? 0 : duty}</span></li>
                    <li className={s.pricesItem}>Акцизный сбор:<span>$ {exciseFee(fuelType)}</span></li>
                    <li className={s.pricesItem}>НДС 20%:<span>$ {fuel === "Electric" ? 0 : vat}</span></li>
                    <li className={s.pricesItem}>Пенсионный фонд:<span>$ 155</span></li>
                    <li className={s.pricesTittleItem}>Стоимость ремонта:<span>$ {repairPrice}</span></li>
                </ul>
                <p className={s.pricesTittleItem}>Итоговая стоимость<span>$ {isNaN(customsFullPrice) ? "-" : customsFullPrice + deliveryFullPrice + auctionFullPrice + 1050 + 155 + repairPrice}</span></p>
            </div>
            
                <button onClick={decrement} className={s.goBackBtn}>back</button>
        </div>
    );
};

export default FourthStep;

  
