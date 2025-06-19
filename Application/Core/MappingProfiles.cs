using System;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        // Add your mapping configurations here
        // For example:
        // CreateMap<SourceType, DestinationType>();
        // CreateMap<AnotherSourceType, AnotherDestinationType>();
    }
}
