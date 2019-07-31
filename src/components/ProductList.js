// function EpisodesList() {

//     const [products, setProducts] = useState([])

//     useEffect(() => {
//           axios.get("https://rickandmortyapi.com/api/episode/")
//               .then (response => {
//                   setproducts(response.data.results);
//               })
//               .catch(error => {
//                 console.log("Error: Please reload screen", error)
//               })
//     }, []);

//     return (
//         <section className="div.card.ui grid-view">
//           {products.map(product => {
//             console.log(products)
//             return <EpisodesCard key={product.id} {...product} />;
            
//           })}
          
//           </section>
//     )
// }

// export default EpisodesList