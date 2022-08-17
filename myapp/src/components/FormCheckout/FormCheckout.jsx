import { useEffect, useState } from 'react';
import "./FormCheckout.css";

const FormCheckout = () => {
    const [location, setLocation] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(response => response.json())
            .then(data => setLocation(data))

    }
        , [])

    console.log(location)
    const [city, setCity] = useState(null)
    const [district, setDistrict] = useState(null)
    const [commune, setCommune] = useState(null)


    const result = location.find(item => item.Name === city)

    const result1 = result?.Districts.find(item => item.Name === district)


    return (
        <div className="form-group">
            <select
                className='form-select'
                onChange={(e) => setCity(e.target.value)}
                value={city}
            >
                <option value={null}>Select City</option>
                {
                    location.map(item => {
                        return <option value={item.Name} key={item.id} >{item.Name}</option>
                    })

                }
            </select>


            <div className="invalid-feedback">Chọn Tỉnh/Thành phố</div>

            <select
                className='form-select'
                onChange={(e) =>setDistrict(e.target.value)}
                value={district}
            >
                <option >Select Districts</option>
                {
                    result?.Districts.map(item => {
                        return <option value={item.Name} key={item.id} >{item.Name}</option>
                    })
                }
            </select>

            <div className="invalid-feedback">Chọn Quận/Huyện</div>

            <select
                className='form-select'
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
            >
                <option >Select Wards</option>
                {
                    result1?.Wards.map(item => {
                        return <option value={item.Name} key={item.id} >{item.Name}</option>
                    })
                }
            </select>

            <div className="invalid-feedback">Chọn Xã/Phường</div>

        </div>
    )
}


export default FormCheckout;