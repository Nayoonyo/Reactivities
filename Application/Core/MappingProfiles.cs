using System;
using Application.Activities.DTOs;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<CreateActivityDto, Activity>();
        CreateMap<EditActivityDto, Activity>();
        // Add your mapping configurations here
        // For example:
        // CreateMap<SourceType, DestinationType>();
        // CreateMap<AnotherSourceType, AnotherDestinationType>();
    }
}
