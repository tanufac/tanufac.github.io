import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout" 
import * as style from "../styles/index.module.scss" 

const Index = () => {
    return (
        <Layout>
            <div className={style.hero}>
                <Image src="/images/title2.jpg" alt="hero" layout="fill" objectFit="cover" quality={90} />
                <div className={style.textContainer}>
                    <h1>Next.js Portfolio</h1>
                    <h3>テスト作成</h3>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.profile}>
                    <div>
                        <h2>self-introduction</h2>
                        <p>はじめまして。</p>
                        <p>データアナリストを目指している小金澤匠です。</p>

                        <p>趣味でNext.js・Reactを使いアプリを作っています。。</p>
                        

                        <p></p>

                        
                    </div>
                    <Image src="/images/profile2.jpg" alt="hero" height={1195} width={1000} quality={90} /> 
                </div>
                <div className={style.skills}>
                    <h2>Skills</h2>
                    <div className={style.skillsContainer}>
                        <div><img src="/images/javascript.svg" alt="javascript"/><span>JavaScript</span></div>
                        <div><img src="/images/react.svg"alt="react"/><span>React</span></div>
                        <div><img src="/images/gatsby.svg" alt="gatsby"/><span>(Gatsby)</span></div>
                        <div><img src="/images/next.svg" alt="next"/><span>Next.JS</span></div>
                    </div>
                </div>
                <div className={style.ctaButton}>
                    <Link href="/contact"><a>Make It Happen!</a></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Index