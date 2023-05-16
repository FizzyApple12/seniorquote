import { Container, Text } from '@mantine/core';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const quotes: [string, string][] = [
    ["The unexamined life is not worth living", "Socrates"],
    ["Whereof one cannot speak, thereof one must be silent", "Ludwig Wittgenstein"],
    ["Entities should not be multiplied unnecessarily", "William of Ockham"],
    ["The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short", "Thomas Hobbes"],
    ["I think therefore I am", "René Descartes"],
    ["He who thinks great thoughts, often makes great errors", "Martin Heidegger"],
    ["We live in the best of all possible worlds", "Gottfried Wilhelm Leibniz"],
    ["What is rational is actual and what is actual is rational", "G. W. F. Hegel"],
    ["God is dead! He remains dead! And we have killed him.", "Friedrich Nietzsche"],
    ["There is but one truly serious philosophical problem, and that is suicide", "Albert Camus"],
    ["One cannot step twice in the same river", "Heraclitus"],
    ["The greatest happiness of the greatest number is the foundation of morals and legislation", "Jeremy Bentham"],
    ["To be is to be perceived", "Bishop George Berkeley"],
    ["Happiness is not an ideal of reason but of imagination", "Immanuel Kant"],
    ["No man's knowledge here can go beyond his experience", "John Locke"],
    ["God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us", "Niccolo Machiavelli"],
    ["Liberty consists in doing what one desires", "John Stuart Mill"],
    ["It is undesirable to believe a proposition when there is no ground whatever for supposing it true", "Bertrand Russell"],
    ["Even while they teach, men learn", "Seneca the Younger"],
    ["There is only one good, knowledge, and one evil, ignorance", "Socrates"],
    ["If God did not exist, it would be necessary to invent Him", "Voltaire"],
    ["This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities", "Bertrand Russell"],
    ["One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another", "René Descartes"],
    ["Leisure is the mother of philosophy", "Thomas Hobbes"],
    ["Philosophy is a battle against the bewitchment of our intelligence by means of language", "Ludwig Wittgenstein"],
    ["There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers", "William James"],
    ["We are what we repeatedly do. Excellence, then, is not an act, but a habit", "Aristotle"],
    ["Only one man ever understood me, and he didn't understand me", "G. W. F. Hegel"],
    ["The mind is furnished with ideas by experience alone", "John Locke"],
    ["Life must be understood backward. But it must be lived forward ", "Søren Kierkegaard"],
    ["Science is what you know. Philosophy is what you don't know", "Bertrand Russell"],
    ["Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck", "Immanuel Kant"],
    ["Philosophy is at once the most sublime and the most trivial of human pursuits", "William James"],
    ["History is Philosophy teaching by examples", "Thucydides"],
    ["He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god", "Aristotle"],
    ["You can discover more about a person in an hour of play than in a year of conversation", "Plato"],
    ["Things alter for the worse spontaneously, if they be not altered for the better designedly", "Francis Bacon"],
    ["All that is necessary for the triumph of evil is that good men do nothing", "mistakenly attributed to Edmund Burke"],
    ["Is man merely a mistake of God's? Or God merely a mistake of man's?", "Friedrich Nietzsche"],
    ["I would never die for my beliefs because I might be wrong", "Bertrand Russell"],
    ["Religion is the sign of the oppressed ... it is the opium of the people", "Karl Marx"],
    ["Happiness is the highest good", "Aristotle"],
    ["If men were born free, they would, so long as they remained free, form no conception of good and evil", "Baruch Spinoza"],
    ["The greater the difficulty, the more glory in surmounting it", "Epicurus"],
    ["Whatever is reasonable is true, and whatever is true is reasonable", "G. W. F. Hegel"],
    ["Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness", "Immanuel Kant"],
    ["Man is condemned to be free", "Jean-Paul Sartre"],
    ["It is one thing to show a man that he is in error, and another to put him in possession of truth", "John Locke"],
    ["I don't know why we are here, but I'm pretty sure it is not in order to enjoy ourselves", "Ludwig Wittgenstein"],
    ["That man is wisest who, like Socrates, realizes that his wisdom is worthless", "Plato"],
    ["The only thing I know is that I know nothing", "Socrates"],
    ["All is for the best in the best of all possible worlds", "Voltaire (in parody of Leibniz)"],
    ["The function of prayer is not to influence God, but rather to change the nature of the one who prays", "Søren Kierkegaard"],
    ["Man is born free, but is everywhere in chains", "Jean-Jacques Rousseau"],
    ["Man will never be free until the last king is strangled with the entrails of the last priest", "Denis Diderot"],
    ["If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things", "René Descartes"],
    ["Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative", "Aristotle"],
    ["I can control my passions and emotions if I can understand their nature", "Spinoza"],
    ["Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it", "Karl Marx"],
    ["It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence", "W. K. Clifford"],
    ["Virtue is nothing else than right reason", "Seneca the Younger"],
    ["Freedom is secured not by the fulfilling of one's desires, but by the removal of desire", "Epictetus"],
    ["In everything, there is a share of everything", "Anaxagoras"],
    ["A little philosophy inclineth man's mind to atheism; but depth in philosophy bringeth men's minds about to religion", "Sir Francis Bacon"],
    ["The brave man is he who overcomes not only his enemies but his pleasures", "Democritus"],
    ["Good and evil, reward and punishment, are the only motives to a rational creature", "John Locke"],
    ["To do as one would be done by, and to love one's neighbor as oneself, constitute the ideal perfection of utilitarian morality", "John Stuart Mill"],
    ["Everything that exists is born for no reason, carries on living through weakness, and dies by accident", "Jean-Paul Sartre"],
    ["Man is the measure of all things", "Protagoras"],
    ["We are too weak to discover the truth by reason alone", "St. Augustine"],
    ["The mind is furnished with ideas by experience alone", "John Locke"],
];

/*const quotes : [string, string][] = [
    ["Ain't nobody do it like me", "YoshiMilk"],
    ["Yestarday was tomorrow but today was the future but what uhm the tomorrow was today and uhhh i think i came", "skinnyjeens64"],
    ["This guy looks like cletus", "YoshiMilk"],
    ["I'd fuck abc not gonna lie", "potasium_"],
    ["i wish we were more poopy colored", "YoshiMilk"],
    ["there is no ammount of noise suppression that can make my brother any less offensive", "TheMightiestTaco"],
    ["SKINNYBENEANOS HEART EMOJI LUST EMOJI", "zachakaquack"],
    ["I've got a pocket knife I'm from csgo", "YoshiMilk"],
    ["why is there so much booba on the steam points store", "zachakaquack"],
    ["its as easy as dangling a water bottle in front of an african child", "Retro"],
    ["my opponents grandma died while we were warming up for the tourney so he said he wont play what the fuck", "SticksMatthew"],
    ["actually i think its pronounced Y el racista 🤓", "zachakaquack"],
    ["and then i started sending him nekopara hentai mods", "snowbunnymei"],
    ["I cant wait to beat my kids when I grow up", "crypticnugget"],
];*/

function getRandomQuote(): [string, string] {
    return quotes[Math.floor(Math.random() * (quotes.length - 1))];
}

let activatedFun = false;
let playingRickRoll = false;

export default function App() {
    const [randomQuote, setRandomQuote] = useState<[string, string]>(getRandomQuote());

    const clickFunction = () => {
        setRandomQuote(getRandomQuote());

        activatedFun = true;
        playingRickRoll = true;
    }

    return (
        <Container 
            sx={{ 
                overflow: 'hidden', 
                height: "100vh"
            }}
            onClick={clickFunction}>

            <ReactPlayer 
                style={{
                    display: `${(activatedFun) ? 'block' : 'none'}`,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    top: "0px",
                    left: "0px",
                }}
                width={"100vw"}
                height={"100vh"}
                url='https://archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4'
                controls={false}
                loop={true}
                playing={playingRickRoll}
                volume={1} />

            <Container 
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    
                <Text 
                    sx={{ textShadow: "0 0 3px #000000" }}>
                    
                    {`"${randomQuote[0]}"`}
                </Text>

                <br />

                <Text 
                    sx={{ textShadow: "0 0 3px #000000" }}>
                    
                    {`- ${randomQuote[1]}`}
                </Text>
            </Container>

            <Container 
                className={(activatedFun) ? 'hidingAnimation' : 'showingAnimation'}
                sx={{
                    opacity: `${(activatedFun) ? '0' : '1'}`,
                    transition: `opacity 1s`,
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -150%)"
                }}>

                <Text sx={{ opacity: "25%", textShadow: "0 0 3px #000000" }}>{`Click anywhere for another quote...`}</Text>
            </Container>

        </Container>
    );
}
