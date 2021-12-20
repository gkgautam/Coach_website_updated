import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RightSection from './components/RightSection';
import { useEffect, useState } from 'react';
//import InfiniteScroll from "react-infinite-scroll-component";

function Home() {

  const [productData, setProductData] = useState([]);
  const [productDataPrice, setProductDataPrice] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const [breadCrumb, setBreadCrumb] = useState({
    htmlValue: "",
    alternateH1Tag: "",
    categoryID: ""
  });

  const [totalProducts, setTotalProducts] = useState(0);

  const [pageNo, setPageNo] = useState(1);

  const [pid, setPid] = useState([]);

  // Sorting
  const [sort, setSort] = useState("featured");

  // Refinement
  const [filterData, setFilterData] = useState([]);

  //category filter
  const [filterCatagory, setFilterCatagory] = useState([]);
  const [filterString, setFilterString] = useState("");

  const [colorFilter, setColorFilter] = useState([]);
  const [colorString, setColorString] = useState("");

  const [genderFilter, setGenderFilter] = useState([]);
  const [genderString, setGenderString] = useState("");

  const [sizeFilter, setSizeFilter] = useState([]);
  const [sizeString, setSizeString] = useState("");

  const [onlineExclusive, setOnlineExclusive] = useState("");

  const getFilterValue = (event) => {

    let value = event.target.value;
    let checked = event.target.checked;
    console.log('batman',filterData[4].value[2]);
    console.log('batman2',filterData[4].value[4]);
    setFilterCatagory(item => checked ? [...item, value] : item.filter(val => val !== value));
  }

  const getColorValue = (event) => {
    let value = event.target.value;
    let checked = event.target.checked;
    setColorFilter(item => checked ? [...item, value] : item.filter(val => val !== value));
  }

  const getGenderValue = (event) => {
    let value = event.target.value;
    let checked = event.target.checked;
    setGenderFilter(item => checked ? [...item, value] : item.filter(val => val !== value));
  }

  const getSizeValue = (event) => {
    let value = event.target.value;
    let checked = event.target.checked;
    setSizeFilter(item => checked ? [...item, value] : item.filter(val => val !== value));
  }

  const getOnlineExclusiveValue = (event) => {
    let value = event.target.value;
    setOnlineExclusive(value);
  }

  const getSortValue = (event) => {
    setSort(event.target.value);
  }



  const fetchData = async () => {

    try {

      const res = await fetch(`https://development.coach.com/shop/new?srule=${sort}&page=${pageNo}&start=0&filterCategory=${filterString}&colorVal=${colorString}&gender=${genderString}&bagSize=${sizeString}&onlineExclusive=${onlineExclusive}&fmt=headlessjson`, { method: "GET", credentials: "include" });
      const data = await res.json();

      const s_data = data.schemaData.itemListElement;

      const hits_data = data.hits;
      const breadcrumbs = data.breadcrumbs[0];
      const page_title = data.CurrentPageMetaData;
      const total_products = data.total;
      const { refinements } = data;

      //Refinement array
      let filter_array = [];

      let arr = [];
      let narr = [];

      let product_id = [];
      let color_array = [];

      for (let i = 0; i < s_data.length; i++) {
        const element = s_data[i];
        arr.push({ name: element.name, img: element.image });
      }

      for (let j = 0; j < hits_data.length; j++) {
        const element = hits_data[j];
        narr.push(element.minPrices);
        product_id.push(element.productId)
      }

      for (let l = 0; l < hits_data.length; l++) {
        const element = hits_data[l];
        product_id.push(element.productId)
      }

      //Refinement
      for (let i = 0; i < refinements.length; i++) {
        const element = refinements[i];
        filter_array.push(element);
      }

      for (let m = 0; m < refinements.length; m++) {
        const element = refinements[m];
        color_array.push(element);
      }

      setProductData(arr);
      setProductDataPrice(narr);
      setBreadCrumb({ htmlValue: breadcrumbs.htmlValue, alternateH1Tag: breadcrumbs.alternateH1Tag, categoryID: breadCrumb.categoryID });
      setPageTitle(page_title.title);
      setTotalProducts(total_products);
      setPid(product_id);

      //Refinement
      setFilterData(filter_array);

      setFilterString(filterCatagory.toString().replaceAll(",", "|"));
      setColorString(colorFilter.toString().replaceAll(",", "|"));
      setGenderString(genderFilter.toString().replaceAll(",", "|"));
      setSizeString(sizeFilter.toString().replaceAll(",", "|"));

      console.log(colorFilter);



      // console.log(refinements);

    } catch (error) {
      console.log('govind error', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [sort, pageNo, filterCatagory, filterString, colorString, colorFilter, genderFilter, genderString, sizeFilter, sizeString, onlineExclusive]);



  return (
    <>

      <Navbar />
      <title>{pageTitle}</title>

      <div className="container-fluid" >
        <div className="container-xxl">
          <div className="row mt-4">

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb my-0">
                <li className="breadcrumb-item" style={{ fontSize: "14px" }}><a href={`/${breadCrumb.categoryID}`}>{breadCrumb.htmlValue}</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ fontSize: "14px" }}>{breadCrumb.alternateH1Tag}</li>
              </ol>
            </nav>

          </div>
          <div className="row mt-3 mb-5">
            <h2 className="my-0" style={{ fontWeight: "700", fontSize: "26px", color: "black" }}>NEW ARRIVALS</h2>
          </div>
          <div className="row">


            <div className="col-xl-3 col-lg-3 col-md-4">

              <div className="d-flex justify-content-between align-items-center" >
                <small className="p-0">FILTER BY</small>
                <small className="p-0"><button onClick={() => { setFilterCatagory([]); setColorFilter([]); setGenderFilter([]); setSizeFilter([]); setOnlineExclusive("") }} className="btn btn-sm py-1 border">CLEAR ALL</button></small>
              </div>

              <hr className='divider' />

              {/* LEFT SECTION */}

              {filterData.length > 0 ?
                <>
                  <div className="accordion accordion-flush" id="accordionFlushExample">





                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{ boxShadow: "none" }} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          {filterData[4].displayName}
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ height: "400px", overflowY: "scroll" }}>
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            { 
                             
                              filterData[4].value.map((val, index1) => {
                                return val.selectable == true ?
                                  ( 
                                    <li key={index1}>
                                      <input className="form-check-input me-3" type="checkbox" name={index1} value={val.refvalue} onChange={getFilterValue} id={val.refvalue} />
                                      <label className="form-check-label" htmlFor={val.refvalue} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  ) :
                                  (
                                    <li key={index1}>
                                      <input className="form-check-input me-3" disabled={true} type="checkbox" name={index1} value={val.refvalue} onChange={getFilterValue} id={index1} />
                                      <label className="form-check-label" htmlFor={index1} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  )
                              })
                            }
                            
                          </ul>
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{ boxShadow: "none" }} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          {filterData[1].displayName}
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {
                              filterData[1].value.map((val, index2) => {
                                return val.selectable == true ?
                                  (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" type="checkbox" name={index2} value={val.refvalue} onChange={getColorValue} id={val.refvalue} />
                                      <label className="form-check-label" htmlFor={val.refvalue} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  ) : (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" disabled={true} name={index2} value={val.refvalue} onChange={getColorValue} type="checkbox" id={index2} />
                                      <label className="form-check-label" htmlFor={index2} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>


                    {/* Gender Filter */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{ boxShadow: "none" }} data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          {filterData[9].displayName}
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {
                              filterData[9].value.map((val, index2) => {
                                return val.selectable == true ?
                                  (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" type="checkbox" name={index2} value={val.refvalue} onChange={getGenderValue} id={val.refvalue} />
                                      <label className="form-check-label" htmlFor={val.refvalue} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  ) : (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" disabled={true} name={index2} value={val.refvalue} onChange={getGenderValue} type="checkbox" id={index2} />
                                      <label className="form-check-label" htmlFor={index2} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>


                    {/* Size Filter */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{ boxShadow: "none" }} data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          {filterData[8].displayName}
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {
                              filterData[8].value.map((val, index2) => {
                                return val.selectable == true ?
                                  (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" type="checkbox" name={index2} value={val.refvalue} onChange={getSizeValue} id={val.refvalue} />
                                      <label className="form-check-label" htmlFor={val.refvalue} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  ) : (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" disabled={true} name={index2} value={val.refvalue} onChange={getSizeValue} type="checkbox" id={index2} />
                                      <label className="form-check-label" htmlFor={index2} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Online Exclusive Filter */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{ boxShadow: "none" }} data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                          {filterData[2].displayName}
                        </button>
                      </h2>
                      <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {
                              filterData[2].value.map((val, index2) => {
                                return val.selectable == true ?
                                  (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" type="radio" name="onlineExclusive" value={val.refvalue} onChange={getOnlineExclusiveValue} id={val.refvalue} />
                                      <label className="form-check-label" htmlFor={val.refvalue} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  ) : (
                                    <li key={index2}>
                                      <input className="form-check-input me-3" disabled={true} name="onlineExclusive" value={val.refvalue} onChange={getOnlineExclusiveValue} type="radio" id={index2} />
                                      <label className="form-check-label" htmlFor={index2} style={{ cursor: "pointer" }}>{val.refvalue}</label>
                                    </li>
                                  )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>





                  </div>
                </>
                : null}

            </div>

            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="row">
                <div className="col-2 d-flex align-items-center px-1">
                  <small>{totalProducts} Products</small>
                </div>
                <div className="col-10">
                  <div className="d-flex justify-content-end align-items-center">
                    <small style={{ fontSize: "12px" }}>Sort by:</small>

                    <select className="form-select border-0 form-selectsm" onChange={getSortValue} style={{ boxShadow: "none", fontSize: "12px", width: "150px" }}>
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="top-rated">Top Rated</option>
                      <option value="most-relevant">Most Relevant</option>
                      <option value="price-low-to-high">Price Low To High</option>
                      <option value="price-high-to-low">Price High to Low</option>
                    </select>

                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col my-2">
                  {
                    filterCatagory.length > 0 ?

                      filterCatagory.map((val, index) => {
                        return (
                          <small key={index} className='badge bg-dark rounded-pill px-3 py-2 me-2 mb-2 d-inline-flex align-items-center'>{val} <button type="button" className="btn-close btn-close-white my-0 ms-3 p-0" style={{ boxShadow: "none" }} aria-label="Close"></button></small>
                        )
                      })

                      : null
                  }
                  {
                    colorFilter.length > 0 ?

                      colorFilter.map((val, index) => {
                        return (
                          <small key={index} className='badge bg-dark rounded-pill px-3 py-2 me-2 mb-2 d-inline-flex align-items-center'>{val} <button type="button" className="btn-close btn-close-white my-0 ms-3 p-0" style={{ boxShadow: "none" }} aria-label="Close"></button></small>
                        )
                      })

                      : null
                  }

                  {
                    genderFilter.length > 0 ?

                      genderFilter.map((val, index) => {
                        return (
                          <small key={index} className='badge bg-dark rounded-pill px-3 py-2 me-2 mb-2 d-inline-flex align-items-center'>{val} <button type="button" className="btn-close btn-close-white my-0 ms-3 p-0" style={{ boxShadow: "none" }} aria-label="Close"></button></small>
                        )
                      })

                      : null
                  }

                  {
                    sizeFilter.length > 0 ?

                      sizeFilter.map((val, index) => {
                        return (
                          <small key={index} className='badge bg-dark rounded-pill px-3 py-2 me-2 mb-2 d-inline-flex align-items-center'>{val} <button type="button" className="btn-close btn-close-white my-0 ms-3 p-0" style={{ boxShadow: "none" }} aria-label="Close"></button></small>
                        )
                      })

                      : null
                  }

                </div>

              </div>

              <RightSection p_data={productData} p_hits={productDataPrice} pid={pid} />

              <div className="row">
                <div className="col my-3 text-center">
                  <button className='btn border' onClick={()=> setPageNo(pageNo+1) }>Load more</button>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Home;
