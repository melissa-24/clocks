function est() {
    est = new Date().toLocaleTimeString('en-GB')
    // console.log('EST: ', est)
    document.getElementById('neg4gmt').innerHTML = est
}
function gmt() {
    gmt = new Date(new Date().getTime() + +5*60*60*1000).toLocaleTimeString('en-GB')
    console.log('gmt: ', gmt)
    document.getElementById('gmt').innerText = gmt
}
function cst() {
    cst = new Date(new Date().getTime() + -1*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('cst: ', cst)
    document.getElementById('neg5gmt').innerText = cst
}
function mst() {
    mst = new Date(new Date().getTime() + -2*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('mst: ', mst)
    document.getElementById('neg6gmt').innerText = mst
}
function pst() {
    pst = new Date(new Date().getTime() + -3*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('pst: ', pst)
    document.getElementById('neg7gmt').innerText = pst
}
function akdt() {
    akdt = new Date(new Date().getTime() + -4*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('akdt: ', akdt)
    document.getElementById('neg8gmt').innerText = akdt
}
function hst() {
    hst = new Date(new Date().getTime() + -6*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('hst: ', hst)
    document.getElementById('neg10gmt').innerText = hst
}
function bst() {
    bst = new Date(new Date().getTime() + +5*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('bst: ', bst)
    document.getElementById('plusgmt').innerText = bst
}
function ast() {
    ast = new Date(new Date().getTime() + +7*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('ast: ', ast)
    document.getElementById('plus3gmt').innerText = ast
}
function ist() {
    ist = new Date(new Date().getTime() + +9.5*60*60*1000).toLocaleTimeString('en-GB')
    // console.log('ist: ', ist)
    document.getElementById('plus5-5gmt').innerText = ist
}