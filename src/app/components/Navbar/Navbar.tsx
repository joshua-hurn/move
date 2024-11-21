import Image from 'next/image';
import NavLogo from '@/images/nav_logo.png';

export default function Navbar() {
    return (
        <nav>
            <Image
                src={NavLogo}
                alt="Logo, 'Move', and two simply drawn people grasping hands in cooperation"
                priority={true}
            />
        </nav>
    )
}