export enum UserRole {
      admin = 'admin',
      editor = 'editor',
      guest = 'guest',
    }
    
    type RoleDescriptions = Record<UserRole, string>

    // Замініть наступний код на версію за допомогою Record
    const RoleDescription: RoleDescriptions = {
      admin: 'Admin User',
      editor: 'Editor User',
      guest: 'Guest User',
    };
    

    