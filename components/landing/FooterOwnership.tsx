import Image from 'next/image';
import { footerOwnership, repoUrl } from '@/content/landingContent';

export default function FooterOwnership() {
    return (
        <footer className="footer-shell">
            <div className="footer-inner">
                <div className="footer-brand">
                    <Image
                        src="/assets/wordmark-icu-b-connect.svg"
                        alt="ICU-B Connect"
                        width={140}
                        height={35}
                        className="footer-logo"
                    />
                    <p className="footer-ownership">{footerOwnership}</p>
                </div>
                <div className="footer-links">
                    <a href={repoUrl} target="_blank" rel="noreferrer">
                        View Public Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}
