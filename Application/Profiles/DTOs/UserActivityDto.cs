using System;
using System.Diagnostics;

namespace Application.Profiles.DTOs;


public class UserActivityDto
{
    public required string Id { get; set; }
    public required string Title { get; set; }
    public required string Category { get; set; }

    public DateTime Date { get; set; }
}
