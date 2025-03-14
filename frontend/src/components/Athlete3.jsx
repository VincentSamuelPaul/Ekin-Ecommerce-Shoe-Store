import "../styles/Header.css"
import pic from "../assets/atheletes/jordan.png"

const Athlete = () => {
    return (
        <a className='flex flex-col justify-center items-start' target="_blank" rel="relation_name" href="https://www.google.com/search?q=michael+jordan&sca_esv=78416e3855461db3&rlz=1C5GCEA_enIN1152IN1152&sxsrf=AHTn8zoyP-FM2xLOOqSkST7Gfj5LhiTVBA%3A1741972596499&ei=dGTUZ66ZHpuy4-EPsLPjuAQ&gs_ssp=eJzj4tDP1TcwNUk2NGD04svNTM5ITM1RyMovSknMAwBgDAgF&oq=&gs_lp=Egxnd3Mtd2l6LXNlcnAiACoCCAoyBxAuGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAuGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyEBAuGMcBGCcY6gIYjgUYrwEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQFIyA1QAFgAcAF4AZABAJgBAKABAKoBALgBAcgBAPgBAZgCAaACBagCEJgDBfEFj0Qv3T0R75S6BgYIARABGAiSBwExoAcA&sclient=gws-wiz-serp">
            <img src={pic} alt="shoe1" className='w-40 lg:w-96'/>
            <p className='text-sm font-semibold lg:text-2xl mt-2'>Micheal Jordan</p>
            <p className='text-sm lg:text-lg'>Basketball Legend</p>
        </a>
    )
}

export default Athlete