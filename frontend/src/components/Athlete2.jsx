import "../styles/Header.css"
import pic from "../assets/atheletes/kobe.png"

const Athlete2 = () => {
    return (
        <a className='flex flex-col justify-center items-start' target="_blank" rel="relation_name" href="https://www.google.com/search?q=kobe+bryant&sca_esv=78416e3855461db3&rlz=1C5GCEA_enIN1152IN1152&sxsrf=AHTn8zpPp-d31leIAcN3VMPiNgQzLkEv-A%3A1741972501581&ei=FWTUZ4yLI8SJ4-EPyde8gA0&gs_ssp=eJzj4tTP1TcwzM5NMTFg9OLOzk9KVUgqqkzMKwEAVekHhw&oq=kobe+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWtvYmUgKgIIATIKECMYgAQYJxiKBTINEC4YgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjfBNgBAUi1GVD6A1jwD3ACeAGQAQCYAawBoAHrBaoBAzAuNbgBAcgBAPgBAZgCCKACgw-oAhHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAcICBxAuGCcY6gLCAgcQIxgnGOoCwgIQEC4YxwEYJxjqAhiOBRivAcICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAgoQLhiABBgnGIoFwgIKEC4YgAQYQxiKBcICCxAuGIAEGLEDGIMBwgIFEAAYgATCAg4QLhiABBixAxjRAxjHAcICEBAuGIAEGLEDGEMYgwEYigXCAg4QLhiABBixAxiDARiKBcICCBAuGIAEGLEDwgITEC4YgAQYsQMY0QMYQxjHARiKBcICCxAuGIAEGLEDGIoFwgIQEC4YgAQYsQMYQxjlBBiKBcICCxAAGIAEGLEDGIoFwgIQEC4YgAQYsQMYQxjJAxiKBcICCxAAGIAEGJIDGIoFmAMM8QVM_7H1THGt3YgGAZAGE7oGBggBEAEYCZIHBzIuNS43LTGgB4mPAQ&sclient=gws-wiz-serp">
            <img src={pic} alt="shoe1" className='w-40 lg:w-96'/>
            <p className='text-sm font-semibold lg:text-2xl mt-2'>Kobe Bryant</p>
            <p className='text-sm lg:text-lg'>NBA Lengend</p>
        </a>
    )
}

export default Athlete2