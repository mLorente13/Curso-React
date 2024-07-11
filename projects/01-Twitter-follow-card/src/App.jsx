import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
    
    const users = [
        { 
            name: 'Marc Lorente Tur', 
            userName: 'mLorente13', 
            isFollowing: true 
        },
        { 
            name: 'Miguel Ángel Durán', 
            userName: 'midudev', 
            isFollowing: true 
        },
        { 
            name: 'Pablo Hernandez', 
            userName: 'pheralb', 
            isFollowing: false 
        },
    ]

    return (
        <section className='App'>
            {
                users.map((user) => {
                    const { name, userName, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName} 
                            formatUserName={formatUserName} 
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
