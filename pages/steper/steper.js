import Layout from '@/components/Layout';
import { useState } from 'react';
import Steps from '@/components/Steps';
import FirstStep from '@/components/Steps/FirstStep';
import SecondStep from '@/components/Steps/SecondStep';
import ThirdStep from '@/components/Steps/ThirdStep';
import FourthStep from '@/components/Steps/FourthStep';
import FifthStep from '@/components/Steps/FifthStep';
import SixthStep from '@/components/Steps/SixthStep';
import FinishStep from '@/components/Steps/FinishStep';
import SelectedCar from '@/components/Steps/SelectedCar';


export default function Home() {
  const [step, setStep] = useState(0) // was 0
  const [vin, setVin] = useState('');
  const [referer, setReferer] = useState('');
    const [data, setData] = useState({});

    const fetchData = async (vin) => {
        try {
            const response = await fetch(`/api/items/${vin}`);
            if (!response) {
                throw new Error(`Error: ${response.status}`);
            }
            const responseToJSON = await response.json();
            const { easyCars } = responseToJSON;
            setData(easyCars);
        }
        catch (e) {
            console.error(e);
        }
    };

  const stepIncrement = ({ vinNumber, referer: easyCarsReferer }) => {
    setStep(step + 1);
    if (vinNumber) {
        setVin(vinNumber);
        const carData = fetchData(vinNumber);
        setData(carData);
    }
    if (easyCarsReferer) setReferer(easyCarsReferer);
  }
  const stepDecrement = () => {
    setStep(step - 1)
  }

  const renderSwitch = (param) => {
    switch (param) {
        case 0:
            return <FirstStep increment={stepIncrement} />
      case 1:
        return <SecondStep increment={stepIncrement} decrement={stepDecrement} referer={referer} />
      case 2:
        return (
          <>
            <SelectedCar data={data} />
            <ThirdStep increment={stepIncrement} decrement={stepDecrement} vin={vin} data={data}/>
          </>
        )
      case 3:
        return (
          <>
            <SelectedCar data={data}  />
            <FourthStep increment={stepIncrement} decrement={stepDecrement} data={data}/>
          </>
        )
      case 4:
        return (
          <>
            <SelectedCar data={data}  />
            <FifthStep increment={stepIncrement} decrement={stepDecrement}/>
          </>
        )
      case 5:
        return (
          <>
            <SelectedCar data={data}  />
            <SixthStep increment={stepIncrement} decrement={stepDecrement}/>
          </>
        )
      case 6:
        return (
          <>
            <SelectedCar data={data} />
            <FinishStep increment={stepIncrement} decrement={stepDecrement}/>
          </>
        )
      default:
        break;
    }
  }

  return (
    <div className='root'>
      <Layout nodesUnderBg={<Steps currentStep={step}/>}>
      {renderSwitch(step)}
      </Layout>
    </div>
  )
}