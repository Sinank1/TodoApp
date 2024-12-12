export default function Footer() {
    const simdi = new Date().getHours();
    
    const acilisZaman = 10;
    const kapanisZaman = 20;

    const isOpen = simdi >= acilisZaman && simdi < kapanisZaman;


    return(
      <footer className='footer mt-auto py-3 bg-light border-top'>
        {
            isOpen ? (
                <p>Akşam {kapanisZaman} saatine kadar sipariş verebilirsiniz.</p>
            ):
            (
                <p>Sipariş alınamamaktadır. Açılış saatini bekleyiniz.</p>
            )
        }
      </footer>
    )
}