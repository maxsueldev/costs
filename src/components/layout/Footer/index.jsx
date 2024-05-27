import { FooterTag, SocialList, Copy } from './style';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <FooterTag>
            <SocialList>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </SocialList>
            <Copy><span>Costs</span> &copy; 2021</Copy>
        </FooterTag>
    );
}

export default Footer;