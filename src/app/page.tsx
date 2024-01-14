'use client'
import { InputRootMock } from '@/components/Input'
import { Egg } from 'lucide-react'
import Image from 'next/image'
const mockData = {
  "data": {
    "calculate": {
      "crqv_cost_direct": {
        "value": 19218.078027536998,
        "sum": [
          {
            "id": "41cbda0b-d63c-4c5b-b206-13a1f2152610",
            "value": 9262.765803179
          },
          {
            "id": "be0d946f-a0e7-465e-88a4-a8589b8d7661",
            "value": 4977.656112179
          },
          {
            "id": "1362f9f9-1f18-4563-adc6-e3bfb348002c",
            "value": 4977.656112179
          }
        ]
      },
      "crqv_cost_direct_margin": {
        "value": 19218.078027536998,
        "sum": [
          {
            "id": "41cbda0b-d63c-4c5b-b206-13a1f2152610",
            "value": 9262.765803179
          },
          {
            "id": "be0d946f-a0e7-465e-88a4-a8589b8d7661",
            "value": 4977.656112179
          },
          {
            "id": "1362f9f9-1f18-4563-adc6-e3bfb348002c",
            "value": 4977.656112179
          }
        ]
      },
      "crqv_cost_direct_margin_tax_pis": {
        "value": 357.2938450189978,
        "sum": [
          {
            "id": "41cbda0b-d63c-4c5b-b206-13a1f2152610",
            "value": 172.20916704501803
          },
          {
            "id": "be0d946f-a0e7-465e-88a4-a8589b8d7661",
            "value": 92.54233898698988
          },
          {
            "id": "1362f9f9-1f18-4563-adc6-e3bfb348002c",
            "value": 92.54233898698988
          }
        ]
      },
      "crqv_cost_direct_margin_tax_cofins": {
        "value": 1645.717104329929,
        "sum": [
          {
            "id": "41cbda0b-d63c-4c5b-b206-13a1f2152610",
            "value": 793.2058603285678
          },
          {
            "id": "be0d946f-a0e7-465e-88a4-a8589b8d7661",
            "value": 426.2556220006806
          },
          {
            "id": "1362f9f9-1f18-4563-adc6-e3bfb348002c",
            "value": 426.2556220006806
          }
        ]
      },
      "crqv_cost_direct_margin_tax_iss": {
        "value": 433.0834485078761,
        "sum": [
          {
            "id": "41cbda0b-d63c-4c5b-b206-13a1f2152610",
            "value": 208.73838429699154
          },
          {
            "id": "be0d946f-a0e7-465e-88a4-a8589b8d7661",
            "value": 112.17253210544226
          },
          {
            "id": "1362f9f9-1f18-4563-adc6-e3bfb348002c",
            "value": 112.17253210544226
          }
        ]
      },
      "crqv_gross_price": {
        "value": 21654.1724253938,
        "sum": [
          {
            "id": "41cbda0b-d63c-4c5b-b206-13a1f2152610",
            "value": 10436.919214849577
          },
          {
            "id": "be0d946f-a0e7-465e-88a4-a8589b8d7661",
            "value": 5608.626605272113
          },
          {
            "id": "1362f9f9-1f18-4563-adc6-e3bfb348002c",
            "value": 5608.626605272113
          }
        ]
      }
    },
    "items": [
      {
        "crqi_internal_id": "41CBDA0B-D63C-4C5B-B206-13A1F2152610",
        "crqi_product_type": null,
        "crqv_internal_id": "85709BE4-B8D9-4CC7-B56C-9709542A83EF",
        "crq_internal_id": "283C6973-C0BA-466F-8144-4A29EB1237E3",
        "crqi_product_number": "1_SW",
        "crqi_product_description": "TESTE",
        "crqi_service_type": "SW",
        "crqi_quote_from_cisco": null,
        "crqi_serial_number": "0000000XXXXX",
        "crqi_instance_number": "0000000XXXXX",
        "crqi_component": "MAJOR",
        "crqi_quantity": 2,
        "crqi_unity_list_price": 3897.67,
        "crqi_prorated_list_price": 10443.619890411,
        "crqi_service_classification": "SMARTNET - SOFTWARE APPLICATION SUPPORT",
        "crqi_service_sla": "N/A",
        "crqi_service_group": "SMARTNET SW",
        "crqi_service_level": "ECMU",
        "crqi_total_discounts": 32,
        "crqi_extended_net_price": 7101.661525479,
        "crqi_end_customer_city": "SP",
        "crqi_service_price_list": "BR",
        "crqi_reference_serial_number": "0",
        "crqi_reference_instance_number": "0",
        "crqi_start_date": "2023-05-02T03:00:00.000Z",
        "crqi_end_date": "2024-09-02T03:00:00.000Z",
        "crqi_cost_direct_margin": 9262.765803179,
        "crqi_vendor_add_cost": 0,
        "crqi_vendor_precification_value_currency_br": 6896.47708333,
        "crqi_vendor_precification_value_currency_inc": null,
        "crqi_vendor_precification_pc": 7599.423783284,
        "crqi_liquid_cost": 6931.132747066,
        "crqi_cost_direct": 9262.765803179,
        "crqi_liquid_cost_dso_cf30": 7125.204463983,
        "crqi_cost_gross_price_pis": 241.092833863,
        "crqi_cost_gross_price_cofins": 1110.48820446,
        "crqi_cost_gross_price_iss": 292.233738016,
        "crqi_cost_gross_price": 14611.686900789,
        "crqi_created_at": "2023-08-14T19:29:33.593Z",
        "crqi_update_at": "2023-08-14T19:29:33.593Z"
      },
      {
        "crqi_internal_id": "BE0D946F-A0E7-465E-88A4-A8589B8D7661",
        "crqi_product_type": null,
        "crqv_internal_id": "85709BE4-B8D9-4CC7-B56C-9709542A83EF",
        "crq_internal_id": "283C6973-C0BA-466F-8144-4A29EB1237E3",
        "crqi_product_number": "ITEMTEST",
        "crqi_product_description": "TESTE",
        "crqi_service_type": "HW",
        "crqi_quote_from_cisco": null,
        "crqi_serial_number": "0000000XXXXX",
        "crqi_instance_number": "0000000XXXXX",
        "crqi_component": "MAJOR",
        "crqi_quantity": 1,
        "crqi_unity_list_price": 6892.01,
        "crqi_prorated_list_price": 7175.243287671,
        "crqi_service_classification": "SMARTNET",
        "crqi_service_sla": "8X5XNBD",
        "crqi_service_group": "SMARTNET",
        "crqi_service_level": "SNT",
        "crqi_total_discounts": 50,
        "crqi_extended_net_price": 3587.621643836,
        "crqi_end_customer_city": "SP",
        "crqi_service_price_list": "ASAS",
        "crqi_reference_serial_number": "0",
        "crqi_reference_instance_number": "0",
        "crqi_start_date": "2023-07-16T03:00:00.000Z",
        "crqi_end_date": "2024-07-30T03:00:00.000Z",
        "crqi_cost_direct_margin": 4977.656112179,
        "crqi_vendor_add_cost": 0,
        "crqi_vendor_precification_value_currency_br": 3706.051954219,
        "crqi_vendor_precification_value_currency_inc": null,
        "crqi_vendor_precification_pc": 4083.803806302,
        "crqi_liquid_cost": 3724.675330873,
        "crqi_cost_direct": 4977.656112179,
        "crqi_liquid_cost_dso_cf30": 3828.966240138,
        "crqi_cost_gross_price_pis": 129.559274582,
        "crqi_cost_gross_price_cofins": 596.757870801,
        "crqi_cost_gross_price_iss": 157.041544948,
        "crqi_cost_gross_price": 7852.077247381,
        "crqi_created_at": "2023-08-14T20:50:19.458Z",
        "crqi_update_at": "2023-08-14T20:50:19.458Z"
      },
      {
        "crqi_internal_id": "1362F9F9-1F18-4563-ADC6-E3BFB348002C",
        "crqi_product_type": null,
        "crqv_internal_id": "85709BE4-B8D9-4CC7-B56C-9709542A83EF",
        "crq_internal_id": "283C6973-C0BA-466F-8144-4A29EB1237E3",
        "crqi_product_number": "2_HW",
        "crqi_product_description": "TESTE",
        "crqi_service_type": "HW",
        "crqi_quote_from_cisco": null,
        "crqi_serial_number": "0000000XXXXX",
        "crqi_instance_number": "0000000XXXXX",
        "crqi_component": "MAJOR",
        "crqi_quantity": 1,
        "crqi_unity_list_price": 6892.01,
        "crqi_prorated_list_price": 7175.243287671,
        "crqi_service_classification": "SOLUTION SUPPORT + SERVICE LAYER",
        "crqi_service_sla": "8X5XNBD",
        "crqi_service_group": "SOLUTION SUPPORT",
        "crqi_service_level": "SSSNT",
        "crqi_total_discounts": 50,
        "crqi_extended_net_price": 3587.621643836,
        "crqi_end_customer_city": "SP",
        "crqi_service_price_list": "BR",
        "crqi_reference_serial_number": "0",
        "crqi_reference_instance_number": "0",
        "crqi_start_date": "2023-07-16T03:00:00.000Z",
        "crqi_end_date": "2024-07-30T03:00:00.000Z",
        "crqi_cost_direct_margin": 4977.656112179,
        "crqi_vendor_add_cost": 0,
        "crqi_vendor_precification_value_currency_br": 3706.051954219,
        "crqi_vendor_precification_value_currency_inc": null,
        "crqi_vendor_precification_pc": 4083.803806302,
        "crqi_liquid_cost": 3724.675330873,
        "crqi_cost_direct": 4977.656112179,
        "crqi_liquid_cost_dso_cf30": 3828.966240138,
        "crqi_cost_gross_price_pis": 129.559274582,
        "crqi_cost_gross_price_cofins": 596.757870801,
        "crqi_cost_gross_price_iss": 157.041544948,
        "crqi_cost_gross_price": 7852.077247381,
        "crqi_created_at": "2023-08-14T19:28:30.513Z",
        "crqi_update_at": "2023-08-14T19:28:30.513Z"
      }
    ]
  }
}
const randomObjects = [
  {
    name: "Alice",
    age: 28,
    city: "New York",
    hobby: "Photography"
  },
  {
    name: "Bob",
    age: 35,
    city: "Los Angeles",
    hobby: "Cooking"
  },
  {
    name: "Charlie",
    age: 22,
    city: "Chicago",
    hobby: "Hiking"
  }
];

console.log(randomObjects);

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-gray-middle p-20">
      {/* <MultiStepForm/> */}
      {/* <InputRootMock/> */}
      <EasterEgg onEasterEggActivated={mockData.data.items} />
    </main>
  )
}

import { useState } from 'react';

const EasterEgg = ({ onEasterEggActivated }: { onEasterEggActivated: any[] }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleEasterEggSubmit = () => {
    if (inputValue.toLowerCase() === 'ntttest') {
      onEasterEggActivated.forEach((table) => {
        console.table(table);
      })
    }
  };

  return (
    <>
      <label htmlFor="easterEgg" className='items-center w-fit flex flex-col'>
        <Egg className='text-brand-primary' onClick={() => { setInputValue('') }} />
        <p className='text-brand-primary'>Easter Egg</p>
      </label>
      <input
        name='easterEgg'
        id='easterEgg'
        type="text"
        value={inputValue}
        onKeyUp={handleEasterEggSubmit}
        onChange={handleInputChange}
        className='sr-only pointer-events-none w-0 h-0'
        autoComplete='off'
        placeholder="Digite a senha do easter egg"
      />
      <pre className='text-yellow-400'>
        {
          inputValue.toLowerCase() === 'ntttest' && JSON.stringify(onEasterEggActivated, null, 2)
        }
      </pre>
    </>
  );
};
