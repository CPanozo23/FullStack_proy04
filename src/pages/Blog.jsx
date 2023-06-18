
export const Blog = () =>  {
    const blogText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem repudiandae fuga? Illo, ea ex cumque eaque sequi veniam aperiam, laboriosam minima esse atque fugit molestiae distinctio, harum error voluptas.
    Necessitatibus accusamus culpa sed, neque itaque minus rerum ut aspernatur, quidem molestiae officia libero ad tenetur. Veniam culpa quas quam sunt aliquid accusamus ea, dolor repellat consectetur corporis vero quod.
    Ipsam aliquid quas, dolorum suscipit iste recusandae ut aspernatur. Voluptatibus perspiciatis sequi odio doloremque neque porro distinctio, voluptatem quis sint ea consectetur. Voluptas asperiores sapiente, ipsam laborum dicta ipsa voluptatem.
    Mollitia ut illum molestias exercitationem explicabo accusamus nesciunt dolor, nihil fuga saepe nostrum adipisci debitis optio illo maxime quos aut velit ullam autem rerum laborum. Consequatur reiciendis unde expedita adipisci.
    Magni natus ad consectetur eius accusamus quis asperiores dignissimos unde rerum mollitia a doloribus beatae sint autem nostrum nihil esse sunt obcaecati voluptatem vel, eos est nesciunt iste labore? Eius.
    Blanditiis deleniti iure nihil obcaecati reiciendis. Sint autem quia rem possimus ipsa dolor reprehenderit molestias animi voluptates? Perspiciatis repellendus nesciunt necessitatibus, nostrum consequuntur tempore quisquam maiores ea reprehenderit eligendi iusto?`;
  
    return(
      <main class="">
          <section class="container">
        <h2 className='pt-3'>Blog</h2>
        <article className=''>
          <h3>Título de entrada</h3>
          <img src="https://media.istockphoto.com/id/840668580/photo/chilean-independence-day-concept-fiestas-patrias-chilean-typical-dish-and-drink-on.jpg?s=612x612&w=0&k=20&c=2pIdm28_TM8yZoB0qK_y4gJVMTzubUr8xM9okFX0kh4=" />
          <p>{blogText}</p>
        </article>
      </section>
      </main>
    )
  }
  
  