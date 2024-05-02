import AstrounatLogo from '../../assets/img/astrounat-logo.svg'
export default function Logo(){
    return (
        <div className="flex justify-center items-center gap-3">
            <img src={AstrounatLogo} className='w-custom-h-logo h-custom-h-logo' alt="header logo"/>
            <p className='font-bold text-white text-lg'>Cosmoscan</p>
        </div>
    )
}