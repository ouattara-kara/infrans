import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Infrans</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Solutions de réseau et système informatique pour entreprises. Expertise, fiabilité et innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/infrastructure-reseau" className="text-muted-foreground hover:text-primary">
                  Infrastructure Réseau
                </Link>
              </li>
            
              <li>
                <Link href="/services/maintenance-systeme" className="text-muted-foreground hover:text-primary">
                  Maintenance Système
                </Link>
              </li>
              <li>
                <Link href="/services/solutions-vpn" className="text-muted-foreground hover:text-primary">
                  Solutions VPN
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-computing" className="text-muted-foreground hover:text-primary">
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-muted-foreground hover:text-primary">
                  Équipe
                </Link>
              </li>
              
              <li>
                <Link href="/partenaires" className="text-muted-foreground hover:text-primary">
                  Partenaires
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-muted-foreground hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation" className="text-muted-foreground hover:text-primary">
                  Conditions d'utilisation
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-10 text-center text-sm text-muted-foreground ">
          <p > <span>Infrans</span> © 2025 - {new Date().getFullYear()} </p>
          <p className="my-2">
            Powered by{" "}
            <Link href="https://onma.io" target="_blank" rel="noopener noreferrer">
              <span className="inline-block align-middle ">
                <Image
                  src="/onma.png" 
                  alt="ONMA Logo" 
                  width={90} 
                  height={90} 
                  className="inline-block hover:opacity-80 transition-opacity" 
                />
              </span>
            </Link>
            
          </p>
        </div>

      </div>
    </footer>
  )
}

