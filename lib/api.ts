


interface Partenaire {
    id: number;
    name: string;
    description: string;
    photo: string;
    lien?: string; 
   
  }
 
  interface EquipeMember {
    id: number;
    name: string;
    poste: string;
    description: string;
    photo: string;
    linkedin?: string; 
    twitter?: string; 
    email: string;
  }
  
  // Fonction pour récupérer les partenaires
  export const getPartenaires = async (): Promise<Partenaire[]> => {
    const response = await fetch("http://localhost:8000/api/partenaires/");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des partenaires");
    }
    return response.json();
  };
  
  // Fonction pour récupérer les membres de l'équipe
  export const getEquipe = async (): Promise<EquipeMember[]> => {
    const response = await fetch("http://localhost:8000/api/equipe/");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des membres de l'équipe");
    }
    return response.json();
  };