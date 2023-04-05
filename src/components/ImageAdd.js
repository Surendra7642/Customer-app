import React, { useState, useRef } from 'react';
import axios from 'axios';

function ImageAdd() {
  const [cid, setCid] = useState('');
  const [cname, setCname] = useState('');
  const [productName, setProductName] = useState('');
  const [qty, setQty] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const fileInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);
    formData.append('cid', cid);
    formData.append('cname', cname);
    formData.append('productName', productName);
    formData.append('qty', qty);
    formData.append('price', price);

    try {
      const response = await axios.post("http://localhost:1900/save", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Upload Student Data</h1>
      <form onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-3">
        <div className="form-group">
          <label htmlFor="cid">Customer ID:</label>
          <input type="number" id="cid" name="cid"  className="form-control" value={cid} onChange={(e) => setCid(e.target.value)} />
        </div>
        <br></br>
        <div  className="form-group">
          <label htmlFor="cname">Customer Name:</label>
          <input type="text" id="cname" name="cname" className="form-control" value={cname} onChange={(e) => setCname(e.target.value)} />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" className="form-control" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="qty">Quantity:</label>
          <input type="number" id="qty" className="form-control" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="file">Select file:</label>
          <input type="file" id="file" name="file" className="form-control" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
        </div>
       
        
        <br></br>
        <button type="submit">Add Customer</button>
        </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ImageAdd;
