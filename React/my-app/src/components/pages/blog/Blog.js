import Title from '../../elements/ui/Title';
import Bloglist from '../../elements/widgets/bloglist/Bloglist';
import img01 from '../../../assets/img/blog/01.jpg';

export default function Blog(){
    return (
        <section id="blog">
            <div className="container">
                <Title title = "Today's Blog"/>
                <Bloglist />
            </div>
        </section> 

    );
}