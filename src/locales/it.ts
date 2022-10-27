export default {
  account_import: {
    alert: {
      body: 'Questa seed phrase non corrisponde ad alcun account',
      title: 'Errore',
    },
    complete: {
      title: 'Recupero Account...',
    },
    confirm: {
      next: 'Invia Seed Phrase',
      subtitle:
        'Queste sono le 12 parole che hai inserito. Toccane una qualsiasi se vuoi modificare.',
      title: 'Conferma la\nSeed Phrase',
    },
    word_entry: {
      placeholder: '{{ordinal}} parola',
      subtitle: 'Le Recovery Seed Phrases non sono\ncase-sensitive',
      title: 'Inserisci Recovery\nSeed Phrase',
    },
  },
  account_setup: {
    confirm: {
      forgot: 'Ho dimenticato le mie Parole',
      subtitle:
        'Quale parola qui sotto era la tua <b><errorText>{{ordinal}} parola?</errorText></b>',
      title: 'Conferma\nle tue Parole',
    },
    confirm_pin: {
      subtitle: 'Reinserisci il tuo PIN',
      title: 'Ripeti PIN',
    },
    create_pin: {
      subtitle: 'Proteggiamo il tuo account con un Codice PIN.',
      title: 'Imposta Codice PIN',
    },
    generating: 'STO GENERANDO LE TUE 12 PAROLE...',
    passphrase: {
      next: 'Me le sono scritte',
      subtitle:
        'È cruciale che tu <b>ti scriva tutte queste\n12 parole, in ordine</b>.\n\n<errorText>Non possono essere recuperate.</errorText>',
      title: 'La tua Password\na 12 Parole',
    },
    warning: {
      generate: 'Genera le mie 12 parole',
      subtitle:
        'Gli account sono protetti da\n<b><errorText>12 parole univoche</errorText></b>, che fungono da\n password per accedere o\nrecuperare gli account.',
      title: 'Creare\nun Account sicuro.',
    },
    welcome: {
      create_account: 'Crea account in Helium Network',
      login_with_helium: 'Hai già un Wallet Helium?\nTocca per iniziare.',
      subtitle: "Con quest'app puoi aggiungere il tuo gateway a Helium Network",
      title: "Benvenuto\nnell'app ResIOT",
      // title: 'Benvenuto\nin ResIOT Helium Hotspot',
    },
    linkAccount: {
      stepOne: '1. Scarica una Wallet App supportata',
      stepTwo: '2. Crea un account',
      stepThree: '3. Torna a questa app e accedi.',
    },
    createAccount: {
      signInWith: 'Tocca una delle seguenti app da usare per accedere',
    },
  },
  antennas: {
    elevation_info: {
      desc:
        "Stimare quanto in alto è posizionata l'antenna rispetto al suolo. Un'antenna situata sul tetto di una casa a un piano è in genere di 5 metri.",
      title: 'Altezza Hotspot',
    },
    gain_info: {
      desc:
        "Un valore compreso tra 1 e 15 fino a un punto decimale. Questo è fornito dal tuo hotspot o dal produttore dell'antenna.",
      title: 'Antenna TX / RX Gain',
    },
    onboarding: {
      dbi: 'dBi',
      elevation: 'Altezza (metri)',
      gain: 'TX / RX Gain',
      select: 'Scegli Antenna',
      subtitle: 'Invia i dettagli di antenna e altezza per il tuo Hotspot.',
      title: 'Setup Antenna',
    },
  },
  auth: {
    enter_current: 'Inserisci il tuo PIN attuale per continuare',
    title: 'Inserisci il tuo PIN',
  },
  back: 'Indietro',
  generic: {
    cancel: 'Annulla',
    clear: 'Cancella',
    connect: 'Connetti',
    continue: 'Continua',
    error: 'Errore',
    forget: 'Dimentica',
    go_to_settings: 'Vai nelle Impostazioni',
    invalid_password: 'La tua password non è corretta',
    next: 'Avanti',
    ok: 'OK',
    scan_again: 'Scansiona ancora',
    search_location: 'Cerca un indirizzo o un luogo',
    skip: 'Salta',
    something_went_wrong: 'Qualcosa è andato storto',
    understand: 'Ho capito',
    unknown: 'Sconosciuto',
    period: '.',
  },
  hotspot_details: {
    no_location_body: "Accoppia con l'Hotspot per iniziare.",
    no_location_title: 'Nessuna posizione confermata',
  },
  hotspot_settings: {
    wifi: {
      hide_password: 'Nascondi Password',
      show_password: 'Mostra Password',
    },
  },
  hotspot_setup: {
    add_hotspot: {
      wait_error_body:
        "Hotspot miner è in attesa dell'avvio. Si prega di riprovare tra qualche minuto.",
      wait_error_title: 'Si prega di riprovare',
    },
    ble_error: {
      enablePairing: 'Abilita modalità accoppiamento',
      pairingInstructions:
        'Fai riferimento alle istruzioni del produttore per abilitare il Bluetooth',
      title: 'Nessun Hotspot trovato',
    },
    ble_scan: {
      cancel: 'Annulla scansione',
      title: 'STO SCANSIONANDO GLI HOTSPOT',
    },
    ble_select: {
      hotspots_found: '{{count}} Hotspot trovato.',
      hotspots_found_plural: '{{count}} Hotspot trovati',
      subtitle: 'Scegli il tuo Hotspot per continuare.',
    },
    confirm: {
      mac_address: 'Indirizzo MAC',
      owner_address: 'Indirizzo Proprietario',
      public_key: 'Public Key',
      title: 'Conferma\nInformazioni',
      title_one_line: 'Conferma Informazioni',
    },
    diagnostics: {
      title: 'Diagnostica',
    },
    education: {
      cards: [
        {
          subtitle:
            'Versioni Hotspot: ResIOT-X1-ETH-1-868-HW, ResIOT-X1-LTE-1-868-HW',
          title: 'Aggiungi hotspot ResIOT X1/X1-LTE',
        },
        {
          subtitle:
            'Gli Hotspot preferiscono posti in cui possono vedere la maggior parte del cielo e distanti almeno 300 metri da altri Hotspot',
          title: 'Dammi una buona visuale',
        },
        {
          subtitle:
            'Gli Hotspot non dovrebbero essere nascosti in un comodino o una libreria. Piuttosto mettili vicino a una finestra',
          title: 'Non nascondermi',
        },
        {
          subtitle:
            'Edifici vicini potrebbero ridurre la copertura del tuo Hotspot per i dispositivi vicini',
          title: 'Gli edifici possono bloccare i miei segnali',
        },
        {
          subtitle:
            'Cerca di tenere i tuoi Hotspot lontani da maglie metalliche, queste possono bloccare sensibilmente i segnali radio',
          title: 'Infine - Odio le zanzariere!',
        },
        {
          subtitle:
            'Segui le istruzioni nelle pagine seguenti ed esegui le azioni richieste, in ogni pagina vedrai solo le azioni da eseguire in quel momento. Quando concludi un step, passa al prossimo premendo il pulsante in fondo alla pagina.',
          title: 'Processo guidato',
        },
      ],
      title: 'Hotspot X1/X1-LTE',
    },
    enable_location: {
      cancel: 'No grazie, lo imposterò in seguito',
      next: 'Richiesta permessi',
      p_1:
        'Per prima cosa, ti chiederemo i permessi per accedere alla posizione del tuo telefono.',
      subtitle:
        'Dobbiamo impostare una posizione per Hotspot. Possiamo usare il tuo telefono per farlo.',
      title: 'Imposta posizione \nHotspot',
    },
    external: {
      qrTitle: 'Scansiona QR Code',
      wallet_address: "L'indirizzo del tuo wallet è:",
      webTitle: 'Web Onboarding',
    },
    firmware_update: {
      current_version: 'Versione Attuale',
      explanation:
        'Il tuo Hotspot controllerà gli aggiornamenti automaticamente. Potrebbero volerci circa 10 minuti. Lascialo collegato e controlla più tardi.',
      next: 'Capito',
      required_version: 'Versione richiesta',
      subtitle:
        'Il tuo Hotspot ha bisogno di un aggiornamento firmware prima che tu possa continuare.',
      title: 'Aggiornamento disponibile',
    },
    location: {
      next: 'Imposta posizione',
      title: 'Posizione Hotspot',
    },
    location_fee: {
      balance: 'Saldo:',
      confirm_location:
        'Conferma che la posizione scelta è corretta e registra il tuo Hotspot.',
      elevation: '{{count}} metro',
      elevation_label: 'Altezza:',
      elevation_plural: '{{count}} metri',
      fee: 'Canone:',
      fee_next: 'Paga canone e registra Hotspot',
      gain: '{{gain}} dBi',
      gain_label: 'TX / RX Gain:',
      next: 'Registra Hotspot',
      no_funds: 'HNT insufficienti nel saldo del tuo account',
      subtitle_fee:
        'Devi pagare una Tassa di Posizione da $10 (in DC) per confermare questa posizione.',
      subtitle_free: 'La tua Tassa di Posizione ($10) è stata prepagata.',
      title: 'Tassa di Posizione',
    },
    not_owner: {
      contact_manufacturer:
        "Se pensi di essere il Proprietario dell'Hotspot (es. lo hai acquistato) contatta il produttore dell'Hotspot.",
      subtitle_1_no_follow:
        'Se sei un host che aggiorna il Wi-Fi, puoi uscire dalla configurazione ora.',
      title: 'Questo Hotspot ha già un proprietario.',
    },
    onboarding_error: {
      disconnected:
        "C'è stato un errore durante la connessione all'Hotspot. Si prega di riprovare.",
      next: 'Esci da Setup',
      title: 'Errore Onboarding',
    },
    owned_hotspot: {
      subtitle_1: 'Sembra che questo Hotspot sia già onboarded.',
      subtitle_2:
        'Per aggiornare il Wi-Fi o la posizione del tuo Hotspot, vai nelle Impostazioni del tuo Hotspot.',
      title: 'Possiedi già questo Hotspot',
    },
    pair: {
      alert_ble_off: {
        body:
          "Per iniziare l'accoppiamento, accendi il Bluetooth. Tieni acceso il Bluetooth finché non completi la registrazione.",
        title: 'Abilita Bluetooth',
      },
      alert_no_permissions: {
        body:
          'ResIOT Helium Hotspot necessita dei permessi per usare il Bluetooth. Puoi abilitare i permessi del Bluetooth nelle Impostazioni.',
        title: 'Autorizza Bluetooth',
      },
      scan: 'Cerca il mio Hotspot',
      title: 'Bluetooth',
    },
    power: {
      next: 'Sono acceso',
      title: 'Acceso',
    },
    progress: {
      next: 'Vai al Wallet',
      subtitle:
        "Ci possono volere alcuni minuti quindi se vuoi puoi chiudere questa schermata. Se entro 30 minuti l'hotspot non viene registrato in rete si prega di rifare l'intera procedura.",
      title: 'REGISTRAZIONE HOTSPOT',
    },
    selection: {
      subtitle: 'Aggiungi il tuo hotspot usando BLE',
      title: 'Aggiungi\nil tuo Hotspot.',
    },
    skip_location: {
      subtitle_1: 'Hai deciso di confermare la posizione in seguito.',
      subtitle_2: 'Aggiorna la tua posizione in seguito dalle impostazioni.',
      title: 'Aggiungi Hotspot',
    },
    wifi_password: {
      connecting: 'Connessione alla Rete',
      join_title: 'Inserisci Password',
      placeholder: 'Password',
      subtitle:
        'Inserisci le credenziali del tuo Wi-Fi per connettere il tuo Hotspot a questa Rete.',
    },
    wifi_scan: {
      available_networks: 'Reti disponibili',
      disconnect: 'Dimentica Rete',
      ethernet: 'Utilizza Ethernet',
      not_found_desc:
        "Possono volerci fino a 3 minuti all'Hotspot per avviarsi e trovare reti disponibili.",
      not_found_title: 'Nessuna rete Wi-Fi trovata',
      saved_networks: 'Rete configurata',
      scan_fail_subtitle:
        'Il tuo Hotspot non ha trovato reti Wi-Fi vicine. Controlla che il tuo router sia online e nelle vicinanze.',
      scan_networks: 'Scansiona reti',
      settings_title: 'Impostazioni Wi-Fi',
      subtitle:
        'Scegli la rete Wi-Fi a cui vuoi che il tuo Hotspot si colleghi.',
      title: 'Wi-Fi',
    },
  },
  hotspots: {
    view_activity:
      'Dopo aver aggiunto un Hotspot, puoi visualizzare il tuo account in ',
    explorer: 'Helium Explorer',
    empty: {
      body: 'Tocca su "Aggiungi Hotspot" per aggiungere \nil tuo primo Hotspot',
      hotspots: {
        add: 'Aggiungi Hotspot',
        assertLocation: 'Conferma Posizione',
        transfer: 'Trasferisci Hotspot',
      },
      title: 'Aggiungi un\nResIOT Hotspot Miner',
    },
  },
  learn: {
    next: 'Avanti',
  },
  more: {
    sections: {
      app: {
        language: 'Lingua',
        signOut: 'Log Out',
        signOutWithLink: 'Log Out - Collegato come: {{address}}',
        signOutAlert: {
          body: 'Stai eseguendo il log out dal tuo account.',
          title: 'Attenzione!',
        },
        title: 'App',
      },
      security: {
        authIntervals: {
          after_15_min: 'Dopo 15 minuti',
          after_1_hr: 'Dopo 1 ora',
          after_1_min: 'Dopo 1 minuto',
          after_4_hr: 'Dopo 4 ore',
          after_5_min: 'Dopo 5 minuti',
          immediately: 'Immediatamente',
        },
        enablePin: 'Abilita PIN',
        requirePin: 'Richiedi PIN',
        resetPin: 'Reset PIN',
        title: 'Sicurezza',
      },
    },
    title: 'Impostazioni',
  },
  ordinals: [
    '1ᵃ',
    '2ᵃ',
    '3ᵃ',
    '4ᵃ',
    '5ᵃ',
    '6ᵃ',
    '7ᵃ',
    '8ᵃ',
    '9ᵃ',
    '10ᵃ',
    '11ᵃ',
    '12ᵃ',
  ],
  permissions: {
    location: {
      message:
        "ResIOT Helium Hotspot richiede l'accesso alla tua posizione per le scansioni Bluetooth e per abilitare la conferma della posizione. Questa informazione non sarà mai venduta o condivisa.",
      title: 'Permessi posizione',
    },
    bluetooth: {
      message:
        "ResIOT Helium Hotspot richiede l'accesso ai dispositivi nelle vicinanze per la ricerca e connessione Bluetooth. Questa informazione non sarà mai venduta o condivisa.",
      title: 'Permessi dispositivi nelle vicinanze',
    },
    bluetooth_not_granted: {
      message:
        "ResIOT Helium Hotspot non può funzionare senza accesso ai dispositivi nelle vicinanze. Si prega di disinstallare l'app, reinstallarla e concedere questi permessi.",
      title: 'Permessi dispositivi nelle vicinanze non concessi',
    },
  },
  wallet: {
    copiedToClipboard: 'Copiato {{address}} negli appunti',
  },
  transferHotspot: {
    title: 'Trasferisci Hotspot',
    enterHotspot: 'Inserisci indirizzo Hotspot',
    enterOwner: 'Inserisci nuovo indirizzo Proprietario',
    submit: 'Invia Transazione',
    submitComplete:
      'Trasferimento inviato con successo!\n In attesa di Txn Hash:',
  },
}
