
(() => {
  function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]'); }
  function updateCartBadge(){
    const count = getCart().reduce((a,c)=>a+c.qty,0);
    const badge = document.querySelector('#cartCount');
    if (badge) badge.textContent = count;
  }
  document.addEventListener('visibilitychange', updateCartBadge);
  window.addEventListener('storage', updateCartBadge);
  updateCartBadge();
})();