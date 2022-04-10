function est() {
    est = new Date(new Date().getTime() + -4*60*60*1000).toUTCString('en-GB')
    // console.log('EST: ', est)
    adjust = est.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'EST'
    final = cut + zone
    document.getElementById('neg4gmt').innerHTML = final
}
function gmt() {
    gmt = new Date(new Date().getTime() + 60*60*1000).toUTCString('en-GB')
    // console.log('gmt: ', gmt)
    newGmt = gmt.slice(-13)
    // console.log('newGmt: ', newGmt)
    document.getElementById('gmt').innerText = newGmt
}
function cst() {
    cst = new Date(new Date().getTime() + -5*60*60*1000).toUTCString('en-GB')
    // console.log('cst: ', cst)
    adjust = cst.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'CST'
    final = cut + zone
    document.getElementById('neg5gmt').innerText = final
}
function mst() {
    mst = new Date(new Date().getTime() + -6*60*60*1000).toUTCString('en-GB')
    // console.log('mst: ', mst)
    adjust = mst.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'MDT'
    final = cut + zone
    document.getElementById('neg6gmt').innerText = final
}
function pst() {
    pst = new Date(new Date().getTime() + -7*60*60*1000).toUTCString('en-GB')
    // console.log('pst: ', pst)
    adjust = pst.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'PT'
    final = cut + zone
    document.getElementById('neg7gmt').innerText = final
}
function akdt() {
    akdt = new Date(new Date().getTime() + -8*60*60*1000).toUTCString('en-GB')
    // console.log('akdt: ', akdt)
    adjust = akdt.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'AKDT'
    final = cut + zone
    // console.log('final: ', final)
    document.getElementById('neg8gmt').innerText = final
}
function hst() {
    hst = new Date(new Date().getTime() + -10*60*60*1000).toUTCString('en-GB')
    // console.log('hst: ', hst)
    adjust = hst.slice(-13)
    cut = adjust.substr(0,10)
    zone='HST'
    final = cut + zone
    document.getElementById('neg10gmt').innerText = final
}
function bst() {
    bst = new Date(new Date().getTime() + 60*60*1000).toUTCString('en-GB')
    // console.log('bst: ', bst)
    adjust = bst.slice(-13)
    cut = adjust.substr(0,10)
    zone='BST'
    final = cut + zone
    document.getElementById('plusgmt').innerText = final
}
function ast() {
    ast = new Date(new Date().getTime() + +3*60*60*1000).toUTCString('en-GB')
    // console.log('ast: ', ast)
    adjust = ast.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'AST'
    final = cut + zone
    document.getElementById('plus3gmt').innerText = final
}
function ist() {
    ist = new Date(new Date().getTime() + +5.5*60*60*1000).toUTCString('en-GB')
    // console.log('ist: ', ist)
    adjust = ist.slice(-13)
    cut = adjust.substr(0, 10)
    zone = 'IST'
    final = cut + zone
    document.getElementById('plus5-5gmt').innerText = final
}