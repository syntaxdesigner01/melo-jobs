

  type dataReturn = 
    {
        id: string,
        title: string,
        url:undefined|string,
        referenceId: string,
        posterId: string,
        company: {
          name: string,
          logo: string,
          url: string,
          staffCountRange: undefined |any,
          headquarter:undefined| any,
        },
        location: string,
        type: string,
        postDate: string
      }


  type dataType =[] 