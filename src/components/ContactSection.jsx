

export default function ContactSection () {

    function CopyEmail() {
        document.execCommand
    }
    
    return (
        <div className="flex flex-col justify-centere items-center gap-32 mt-32 px-24 pt-12 pb-4">
            <p className="text-9xl font-bold select-none">Let's work together!</p>
            <p className="text-xl">critizize.joaquin@gmail.com || reynerajoaquinpau@gmail.com || +63 906 577 3679</p>
            <div className="flex w-full text-sm justify-around items-center opacity-80">
                <p>COPYRIGHT © 2024 JOAQUIN REYNERA - ALL RIGHTS RESERVED.</p>
                <ul className="flex gap-12 justify-between items-center">
                    <li>
                        <a href="https://github.com/Sugorr">GITHUB</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/joaquin-reynera-11401127a/">LINKEDIN</a></li>
                    <li>
                        <a href="https://www.facebook.com/Sugorknows">FACEBOOK</a></li>
                </ul>
            </div>
        </div>
    );
}