// import React from 'react';

// const AddProduct = ()=>{
//     const[name,setName]= React.useState('');
//     const[price,setPrice]= React.useState('');
//     const[category,setCategory]= React.useState('');
//     const[company,setCompany]= React.useState('');
//     const [error,setError]=React.useState(false);


//     const addProduct= async ()=>{
           
//         console.warn(!name);
//         if(!name ||!price ||!category ||!company){
//             setError(true);
//             return false;
//         }

//         console.warn(name,price,category,company);
//         const userId = JSON.parse(localStorage.getItem('user'))._id;
//         let result = await fetch("http://localhost:3006/add-product",{
//             method: 'post',
//             body: JSON.stringify({name,price,category,company,userId}),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//     });
//         result = await result.json();
//         console.warn(result);
//     }


//     return(
//         <div className='product'>
//             <h2>Add Product</h2>
//             <input className = 'inputBox' type="text" placeholder = "Enter Product Name" 
//            value={name} onChange={(e)=>{setName(e.target.value)}} />
//              { error && !name && <span className='input-valid'> Enter  name</span>}

//             <input className = 'inputBox' type="number" placeholder = "Enter Product Price"
//              value={price} onChange={(e)=>{setPrice(e.target.value)}} />
//              { error && !price && <span className='input-valid'> Enter price</span>}

//             <input className = 'inputBox' type="text" placeholder = "Enter Product Category" 
//              value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
//              { error && !category && <span className='input-valid'> Enter category</span>}

//             <input className = 'inputBox' type="text" placeholder = "Enter Product Company"
//               value={company} onChange={(e)=>{setCompany(e.target.value)}} />
//               { error && !company && <span className='input-valid'> Enter company</span>}

//             <button className='button' onClick={addProduct}>Add product</button>
//         </div>
//     )
// }



// export default AddProduct;





import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');  // Additional error message state

    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            setErrorMessage('Please fill all the fields');
            return;
        }

        try {
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            let result = await fetch("http://localhost:3006/add-product", {
                method: 'POST',
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            result = await result.json();

            if (result.success) {
                alert('Product added successfully');
                setName('');
                setPrice('');
                setCategory('');
                setCompany('');
                setError(false);
                setErrorMessage('');  // Clear any previous error message
            } else {
                throw new Error(result.message || 'Failed to add product');
            }
        } catch (err) {
            setError(true);
            setErrorMessage(err.message);
        }
    };

    return (
        <div className='product'>
            <h2>Add Product</h2>
            <input
                className='inputBox'
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(false); }}
            />
            {error && !name && <span className='input-valid'>Enter name</span>}

            <input
                className='inputBox'
                type="number"
                placeholder="Enter Product Price"
                value={price}
                onChange={(e) => { setPrice(e.target.value); setError(false); }}
            />
            {error && !price && <span className='input-valid'>Enter price</span>}

            <input
                className='inputBox'
                type="text"
                placeholder="Enter Product Category"
                value={category}
                onChange={(e) => { setCategory(e.target.value); setError(false); }}
            />
            {error && !category && <span className='input-valid'>Enter category</span>}

            <input
                className='inputBox'
                type="text"
                placeholder="Enter Product Company"
                value={company}
                onChange={(e) => { setCompany(e.target.value); setError(false); }}
            />
            {error && !company && <span className='input-valid'>Enter company</span>}

            <button className='button' onClick={addProduct}>Add product</button>

            {errorMessage && <div className='error-message'>{errorMessage}</div>}
        </div>
    );
};

export default AddProduct;



