import { useState } from 'react'
const SAMPLE_PRODUCTS = [
  { id:'nocte-tee-001', title:'Nocté Signature Tee', price:170000, desc:'Premium cotton bamboo tee. Luxury silence in every stitch.', img:'/product-tee-1.jpg', sizes:['S','M','L','XL']},
  { id:'nocte-tee-002', title:'Nocté Monogram Tee', price:190000, desc:'Monogram chest + full back emblem. Limited drop.', img:'/product-tee-2.jpg', sizes:['M','L','XL']},
  { id:'nocte-hat-001', title:'Nocté Nightcap', price:95000, desc:'Structured cap with embroidered emblem. Subtle prestige.', img:'/product-cap-1.jpg', sizes:['OS']}
]

export default function Home(){
  const [page,setPage] = useState('home')
  const [cart,setCart] = useState([])
  const [selected,setSelected] = useState(null)

  function addToCart(product, size='M', qty=1){
    setCart(prev=>{
      const found = prev.find(i=>i.id===product.id && i.size===size)
      if(found) return prev.map(i=> i.id===product.id && i.size===size ? {...i, qty:i.qty+qty} : i)
      return [...prev, {...product, size, qty}]
    })
  }
  function subtotal(){ return cart.reduce((s,i)=> s + (i.price * i.qty), 0) }

  return (
    <div>
      <header className="container header">
        <div>
          <div style={{fontFamily:'Playfair Display',fontSize:22}}>Atelier Nocté</div>
          <div style={{fontSize:11,color:'rgba(255,255,255,0.6)'}}>The Silent Luxury</div>
        </div>
        <nav className="nav">
          <button onClick={()=>setPage('home')}>Home</button>
          <button onClick={()=>setPage('shop')}>Shop</button>
          <button onClick={()=>setPage('about')}>About</button>
          <button onClick={()=>setPage('cart')}>Cart ({cart.length})</button>
        </nav>
      </header>

      {page==='home' && (
        <section className="hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80)'}}>
          <div style={{textAlign:'center'}}>
            <h1 className="font-serif" style={{fontSize:48,margin:0}}>The Silent Luxury</h1>
            <p style={{color:'rgba(255,255,255,0.7)',maxWidth:600,margin:'20px auto'}}>Born of the night. Crafted for eternity. Discover limited drops & signature pieces.</p>
            <div style={{display:'flex',gap:12,justifyContent:'center'}}>
              <button className="btn" onClick={()=>setPage('shop')}>Explore Collection</button>
              <button className="btn" onClick={()=>setPage('about')}>About Nocté</button>
            </div>
          </div>
        </section>
      )}

      {page==='shop' && (
        <main className="container" style={{paddingTop:30,paddingBottom:60}}>
          <h2 style={{textAlign:'center'}}>Shop</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20,marginTop:20}}>
            {SAMPLE_PRODUCTS.map(p=>(
              <div key={p.id} className="card">
                <img src={p.img} alt={p.title} style={{width:'100%',height:220,objectFit:'cover'}} />
                <div style={{padding:16}}>
                  <h3 style={{margin:0}}>{p.title}</h3>
                  <p style={{color:'rgba(255,255,255,0.6)',fontSize:13}}>{p.desc}</p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
                    <div style={{fontWeight:600}}>Rp {p.price.toLocaleString()}</div>
                    <div style={{display:'flex',gap:8}}>
                      <button onClick={()=>{ setSelected(p); setPage('product') }} className="btn">View</button>
                      <button onClick={()=>addToCart(p,p.sizes[0],1)} className="btn" style={{background:'#111',color:'#fff'}}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {page==='product' && selected && (
        <section className="container" style={{paddingTop:30}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:30}}>
            <img src={selected.img} style={{width:'100%',borderRadius:8}} />
            <div>
              <h2 className="font-serif">{selected.title}</h2>
              <p style={{color:'rgba(255,255,255,0.6)'}}>{selected.desc}</p>
              <div style={{marginTop:20}}>
                <div style={{fontWeight:700,fontSize:20}}>Rp {selected.price.toLocaleString()}</div>
                <div style={{marginTop:16}}>
                  <label style={{display:'block',marginBottom:8,color:'rgba(255,255,255,0.6)'}}>Size</label>
                  <div style={{display:'flex',gap:8}}>
                    {selected.sizes.map(s=> <button key={s} className="btn">{s}</button>)}
                  </div>
                </div>
                <div style={{marginTop:20}}>
                  <button onClick={()=>{addToCart(selected, selected.sizes[0],1); setPage('cart')}} className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page==='cart' && (
        <section className="container" style={{paddingTop:30}}>
          <h2>Your Cart</h2>
          {cart.length===0 ? <p style={{color:'rgba(255,255,255,0.6)'}}>Cart is empty</p> :
            <div>
              {cart.map(item=>(
                <div key={item.id + item.size} style={{display:'flex',gap:12,alignItems:'center',padding:12,borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
                  <img src={item.img} style={{width:80,height:80,objectFit:'cover'}} />
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600}}>{item.title}</div>
                    <div style={{color:'rgba(255,255,255,0.6)'}}>Size {item.size}</div>
                    <div style={{marginTop:8}}>Rp {item.price.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{marginBottom:8}}>Qty: {item.qty}</div>
                  </div>
                </div>
              ))}
              <div style={{marginTop:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{color:'rgba(255,255,255,0.6)'}}>Subtotal</div>
                <div style={{fontWeight:700}}>Rp {subtotal().toLocaleString()}</div>
              </div>
            </div>
          }
        </section>
      )}

      {page==='about' && (
        <section className="container" style={{paddingTop:30}}>
          <h2>About Nocté</h2>
          <p style={{color:'rgba(255,255,255,0.7)',maxWidth:800}}>Born of the night, Nocté embodies mystery, power, and elegance. Each piece is a reflection of silence transformed into luxury — timeless and understated.</p>
        </section>
      )}

      <footer style={{padding:40,textAlign:'center',borderTop:'1px solid rgba(255,255,255,0.04)',marginTop:40}}>
        © 2025 Atelier Nocté
      </footer>
    </div>
  )
}
