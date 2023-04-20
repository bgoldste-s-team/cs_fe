import Image from 'next/image'
import { Inter } from 'next/font/google'
import blogData from '../data/blog_data.json';

const inter = Inter({ subsets: ['latin'] })

const Index = () => {
    const posts = blogData.posts
    return (
       <div>
           <h1>My BLog</h1>
           <ul>
           { posts.map((p) =>
               <li>
                  <a key={p.id} href={p.slug}>
                      <article class="prose lg:prose-xl">
                        <h1>i{p.title}</h1>
                        <img src={p.product.thumbnail} />
                        <p>d: {p.id} pid" "{p.product.id} title: </p>
                        <p>{p.content.slice(0,1250)}...</p>
                    </article>
                    </a>
               </li>

           )}
           </ul>
       </div>
    )
};
export default Index;